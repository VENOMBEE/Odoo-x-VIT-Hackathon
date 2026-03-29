import { CompaniesService } from '../services/companies.service';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    getMyCompany(companyId: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        country: string;
        defaultCurrency: string;
    }>;
    updateMyCompany(companyId: string, body: {
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
