import { Queue } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';
export declare class OcrService {
    private prisma;
    private ocrQueue;
    private readonly logger;
    constructor(prisma: PrismaService, ocrQueue: Queue);
    dispatchScan(expenseId: string, imageUrl: string): Promise<{
        jobId: string;
        status: string;
    }>;
    getJobStatus(expenseId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.OcrJobStatus;
        expenseId: string;
        rawResponse: import("@prisma/client/runtime/client").JsonValue | null;
        parsedData: import("@prisma/client/runtime/client").JsonValue | null;
    } | null>;
}
