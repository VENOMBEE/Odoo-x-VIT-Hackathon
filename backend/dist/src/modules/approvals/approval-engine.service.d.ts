import { PrismaService } from '../prisma/prisma.service';
import { TemplateRoutingService } from './template-routing.service';
export declare class ApprovalEngineService {
    private prisma;
    private routingService;
    private readonly logger;
    constructor(prisma: PrismaService, routingService: TemplateRoutingService);
    initializeApprovalChain(expenseId: string, companyId: string, convertedAmount: number, submittedById: string): Promise<void>;
    approve(expenseId: string, approverId: string, companyId: string, comments?: string): Promise<{
        status: string;
        reason: string;
    }>;
    reject(expenseId: string, approverId: string, companyId: string, comments: string): Promise<{
        status: string;
    }>;
    getPendingForApprover(approverId: string, companyId: string): Promise<{
        myApprovalStep: {
            expense: {
                company: {
                    id: string;
                    defaultCurrency: string;
                };
                submittedBy: {
                    id: string;
                    name: string;
                    email: string;
                };
            } & {
                id: string;
                companyId: string;
                createdAt: Date;
                updatedAt: Date;
                amount: import("@prisma/client-runtime-utils").Decimal;
                currency: string;
                convertedAmount: import("@prisma/client-runtime-utils").Decimal | null;
                companyCurrency: string | null;
                exchangeRateUsed: import("@prisma/client-runtime-utils").Decimal | null;
                rateTimestamp: Date | null;
                category: import("@prisma/client").$Enums.ExpenseCategory;
                description: string;
                date: Date;
                status: import("@prisma/client").$Enums.ExpenseStatus;
                receiptUrl: string | null;
                ocrExtracted: boolean;
                submittedById: string;
                templateId: string | null;
                routingRuleId: string | null;
            };
        } & {
            comments: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            stepOrder: number;
            approverId: string;
            status: import("@prisma/client").$Enums.ApprovalStatus;
            actionedAt: Date | null;
            expenseId: string;
        };
        company: {
            id: string;
            defaultCurrency: string;
        };
        submittedBy: {
            id: string;
            name: string;
            email: string;
        };
        id: string;
        companyId: string;
        createdAt: Date;
        updatedAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        convertedAmount: import("@prisma/client-runtime-utils").Decimal | null;
        companyCurrency: string | null;
        exchangeRateUsed: import("@prisma/client-runtime-utils").Decimal | null;
        rateTimestamp: Date | null;
        category: import("@prisma/client").$Enums.ExpenseCategory;
        description: string;
        date: Date;
        status: import("@prisma/client").$Enums.ExpenseStatus;
        receiptUrl: string | null;
        ocrExtracted: boolean;
        submittedById: string;
        templateId: string | null;
        routingRuleId: string | null;
    }[]>;
    private validateApproverAction;
    private getCurrentStep;
    private evaluateConditionalRules;
    private finalizeExpense;
}
