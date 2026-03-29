import { ApprovalsService } from '../services/approvals.service';
export declare class ApprovalsController {
    private readonly approvalsService;
    constructor(approvalsService: ApprovalsService);
    getPending(user: any): Promise<{
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
    approve(expenseId: string, comments: string, user: any): Promise<{
        status: string;
        reason: string;
    }>;
    reject(expenseId: string, comments: string, user: any): Promise<{
        status: string;
    }>;
    createTemplate(dto: any, companyId: string): Promise<{
        steps: ({
            approver: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            stepOrder: number;
            roleLabel: string | null;
            approverId: string;
            templateId: string;
        })[];
    } & {
        id: string;
        companyId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        conditionalRuleType: import("@prisma/client").$Enums.ConditionalRuleType;
        percentageThreshold: number | null;
        isDefault: boolean;
        specificApproverId: string | null;
    }>;
    getTemplates(companyId: string): Promise<({
        steps: ({
            approver: {
                id: string;
                name: string;
                email: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            stepOrder: number;
            roleLabel: string | null;
            approverId: string;
            templateId: string;
        })[];
    } & {
        id: string;
        companyId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        conditionalRuleType: import("@prisma/client").$Enums.ConditionalRuleType;
        percentageThreshold: number | null;
        isDefault: boolean;
        specificApproverId: string | null;
    })[]>;
    getTemplate(id: string, companyId: string): Promise<{
        steps: ({
            approver: {
                id: string;
                name: string;
                email: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            stepOrder: number;
            roleLabel: string | null;
            approverId: string;
            templateId: string;
        })[];
    } & {
        id: string;
        companyId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        conditionalRuleType: import("@prisma/client").$Enums.ConditionalRuleType;
        percentageThreshold: number | null;
        isDefault: boolean;
        specificApproverId: string | null;
    }>;
    updateTemplate(id: string, dto: any, companyId: string): Promise<{
        id: string;
        companyId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        conditionalRuleType: import("@prisma/client").$Enums.ConditionalRuleType;
        percentageThreshold: number | null;
        isDefault: boolean;
        specificApproverId: string | null;
    }>;
    deleteTemplate(id: string, companyId: string): Promise<{
        message: string;
    }>;
    addStep(templateId: string, dto: any, companyId: string): Promise<{
        approver: {
            id: string;
            name: string;
            email: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        stepOrder: number;
        roleLabel: string | null;
        approverId: string;
        templateId: string;
    }>;
    deleteStep(id: string, companyId: string): Promise<{
        message: string;
    }>;
    createRoutingRule(dto: any, companyId: string): Promise<{
        template: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        companyId: string;
        createdAt: Date;
        updatedAt: Date;
        templateId: string;
        minAmount: import("@prisma/client-runtime-utils").Decimal;
        maxAmount: import("@prisma/client-runtime-utils").Decimal | null;
        priority: number;
        isActive: boolean;
    }>;
    getRoutingRules(companyId: string): Promise<({
        template: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        companyId: string;
        createdAt: Date;
        updatedAt: Date;
        templateId: string;
        minAmount: import("@prisma/client-runtime-utils").Decimal;
        maxAmount: import("@prisma/client-runtime-utils").Decimal | null;
        priority: number;
        isActive: boolean;
    })[]>;
    previewRouting(amount: string, companyId: string): Promise<{
        template: ({
            steps: ({
                approver: {
                    id: string;
                    name: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                stepOrder: number;
                roleLabel: string | null;
                approverId: string;
                templateId: string;
            })[];
        } & {
            id: string;
            companyId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            conditionalRuleType: import("@prisma/client").$Enums.ConditionalRuleType;
            percentageThreshold: number | null;
            isDefault: boolean;
            specificApproverId: string | null;
        }) | null;
        templateId: string;
        routingRuleId: string | null;
        amount: number;
        error?: undefined;
    } | {
        amount: number;
        error: any;
    }>;
    getRoutingRule(id: string, companyId: string): Promise<{
        template: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        companyId: string;
        createdAt: Date;
        updatedAt: Date;
        templateId: string;
        minAmount: import("@prisma/client-runtime-utils").Decimal;
        maxAmount: import("@prisma/client-runtime-utils").Decimal | null;
        priority: number;
        isActive: boolean;
    }>;
    updateRoutingRule(id: string, dto: any, companyId: string): Promise<{
        template: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        companyId: string;
        createdAt: Date;
        updatedAt: Date;
        templateId: string;
        minAmount: import("@prisma/client-runtime-utils").Decimal;
        maxAmount: import("@prisma/client-runtime-utils").Decimal | null;
        priority: number;
        isActive: boolean;
    }>;
    deleteRoutingRule(id: string, companyId: string): Promise<{
        message: string;
    }>;
    validateRules(rules: any[], companyId: string): Promise<{
        valid: boolean;
        issues: string[];
    }>;
}
