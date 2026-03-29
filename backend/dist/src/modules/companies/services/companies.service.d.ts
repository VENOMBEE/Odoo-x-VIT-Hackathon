import { PrismaService } from '../../prisma/prisma.service';
export declare class CompaniesService {
    private prisma;
    constructor(prisma: PrismaService);
    findByUser(companyId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        country: string;
        defaultCurrency: string;
    }>;
    update(companyId: string, data: {
        name?: string;
        defaultCurrency?: string;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        country: string;
        defaultCurrency: string;
    }>;
}
