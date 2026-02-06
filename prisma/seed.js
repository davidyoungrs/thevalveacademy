const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // 1. Create Users
    const users = [
        { name: 'Admin User', email: 'admin@valveacademy.com', role: 'ADMIN' },
        { name: 'Sales User', email: 'sales@valveacademy.com', role: 'SALES' },
        { name: 'Mark Wheat', email: 'mark.wheat@valveacademy.com', role: 'TRAINER' },
        { name: 'David Kinvig', email: 'david.kinvig@valveacademy.com', role: 'TRAINER' },
        { name: 'David Young', email: 'david.young@valveacademy.com', role: 'TRAINER' },
        { name: 'Roberto Guerra', email: 'roberto.guerra@valveacademy.com', role: 'TRAINER' },
        { name: 'David Dare', email: 'david.dare@valveacademy.com', role: 'TRAINER' },
        { name: 'Carl McGilbert', email: 'carl.mcgilbert@valveacademy.com', role: 'TRAINER' },
        { name: 'Brad Wilson', email: 'brad.wilson@valveacademy.com', role: 'TRAINER' },
        { name: 'Approver 1', email: 'approver1@valveacademy.com', role: 'APPROVER' },
        { name: 'Approver 2', email: 'approver2@valveacademy.com', role: 'APPROVER' },
    ];

    for (const u of users) {
        await prisma.user.upsert({
            where: { email: u.email },
            update: {},
            create: {
                name: u.name,
                email: u.email,
                role: u.role,
                passwordHash: 'password123', // Hardcoded for MVP dev
                trainerProfile: u.role === 'TRAINER' ? { create: {} } : undefined,
            },
        });
    }

    // 2. Create Modules
    const modules = [
        {
            moduleNo: 'VE01-01',
            category: 'Applications',
            title: 'Turbine Bypass Valves',
            durationDays: 1,
            price: 750, // Assumption based on pattern or keep default
            defaultTrainers: ['Mark Wheat', 'David Kinvig', 'David Young', 'Roberto Guerra'],
        },
        {
            moduleNo: 'VE02-01',
            category: 'Maintenance',
            title: 'M&J Valve Products - M-303 / RQ8',
            durationDays: 1,
            price: 750,
            defaultTrainers: ['David Dare', 'Roberto Guerra', 'Carl McGilbert'],
        },
        {
            moduleNo: 'VE02-02',
            category: 'Maintenance',
            title: 'M&J Valve Products - EG / CEG',
            durationDays: 1,
            price: 1500,
            defaultTrainers: ['David Dare', 'Roberto Guerra', 'Carl McGilbert'],
        },
        {
            moduleNo: 'VE02-03',
            category: 'Maintenance',
            title: 'M&J Valve Products - Danflo',
            durationDays: 1, // Changed from 2
            price: 1500,
            defaultTrainers: ['David Young'],
        },
        {
            moduleNo: 'VE02-04',
            category: 'Maintenance',
            title: 'M&J Valve Products - 4 Way Divertor',
            durationDays: 2,
            price: 2250,
            defaultTrainers: ['David Dare', 'Carl McGilbert'],
        },
        {
            moduleNo: 'VE02-05',
            category: 'Maintenance',
            title: 'Copes Vulcan DSCV Valve Products',
            durationDays: 2, // Changed from 3
            price: 2250,
            defaultTrainers: ['Mark Wheat', 'David Kinvig', 'Brad Wilson', 'Roberto Guerra'],
        },
        {
            moduleNo: 'VE02-06',
            category: 'Maintenance',
            title: 'Copes Vulcan Globe Valve Products',
            durationDays: 2, // Changed from 3
            price: 2250,
            defaultTrainers: ['Mark Wheat', 'David Kinvig', 'Brad Wilson', 'Roberto Guerra'],
        },
    ];

    for (const m of modules) {
        const createdModule = await prisma.module.upsert({
            where: { moduleNo: m.moduleNo },
            update: {
                category: m.category,
                title: m.title,
                durationDays: m.durationDays,
                onlinePricePerAttendee: m.price || 150, // Update existing too
                onsitePricePerAttendee: (m.price || 150) * 2, // Rough scaling for onsite
            },
            create: {
                moduleNo: m.moduleNo,
                category: m.category,
                title: m.title,
                durationDays: m.durationDays,
                onlinePricePerAttendee: m.price || 150,
                onsitePricePerAttendee: (m.price || 150) * 2,
            },
        });

        // Link trainers
        for (const [index, trainerName] of m.defaultTrainers.entries()) {
            const trainerUser = await prisma.user.findFirst({ where: { name: trainerName } });
            if (trainerUser) {
                const trainerProfile = await prisma.trainerProfile.findUnique({ where: { userId: trainerUser.id } });
                if (trainerProfile) {
                    await prisma.moduleTrainer.upsert({
                        where: {
                            moduleId_trainerProfileId: {
                                moduleId: createdModule.id,
                                trainerProfileId: trainerProfile.id,
                            },
                        },
                        update: { priorityOrder: index + 1 },
                        create: {
                            moduleId: createdModule.id,
                            trainerProfileId: trainerProfile.id,
                            priorityOrder: index + 1,
                        },
                    });
                }
            }
        }
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
