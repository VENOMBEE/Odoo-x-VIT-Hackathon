import { ExpenseStatus, ExpenseCategory } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
export declare class ExpenseEntity {
    id: string;
    companyId: string;
    submittedById: string;
    templateId: string | null;
    routingRuleId: string | null;
    amount: Decimal;
    currency: string;
    convertedAmount: Decimal | null;
    companyCurrency: string | null;
    exchangeRateUsed: Decimal | null;
    rateTimestamp: Date | null;
    category: ExpenseCategory;
    description: string;
    date: Date;
    status: ExpenseStatus;
    receiptUrl: string | null;
    ocrExtracted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
