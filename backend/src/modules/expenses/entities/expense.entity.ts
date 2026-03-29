import { ExpenseStatus, ExpenseCategory, Prisma } from '@prisma/client';

export class ExpenseEntity {
  id: string;
  companyId: string;
  submittedById: string;
  templateId: string | null;
  routingRuleId: string | null;
  amount: Prisma.Decimal;
  currency: string;
  convertedAmount: Prisma.Decimal | null;
  companyCurrency: string | null;
  exchangeRateUsed: Prisma.Decimal | null;
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
