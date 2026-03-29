import { OcrService } from './ocr.service';
export declare class OcrController {
    private readonly ocrService;
    constructor(ocrService: OcrService);
    scan(body: {
        expenseId: string;
        imageUrl: string;
    }): Promise<{
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
