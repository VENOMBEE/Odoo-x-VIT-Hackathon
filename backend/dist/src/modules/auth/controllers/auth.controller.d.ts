import { Response } from 'express';
import { AuthService } from '../services/auth.service';
import { SignupDto } from '../dto/signup.dto';
import { LoginDto } from '../dto/login.dto';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(dto: SignupDto, res: Response): Promise<{
        accessToken: string;
        user: {
            id: string;
            companyId: string;
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.Role;
            mustChangePassword: boolean;
        };
        company: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            country: string;
            defaultCurrency: string;
        };
    }>;
    login(dto: LoginDto, res: Response): Promise<{
        accessToken: string;
        user: {
            company: {
                id: string;
                name: string;
                defaultCurrency: string;
            };
            id: string;
            companyId: string;
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.Role;
            managerId: string | null;
            isManagerApprover: boolean;
            mustChangePassword: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    refresh(user: any, res: Response): Promise<{
        accessToken: string;
    }>;
    logout(userId: string, res: Response): Promise<{
        message: string;
    }>;
    getMe(userId: string): Promise<{
        id: string;
        companyId: string;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        managerId: string | null;
        isManagerApprover: boolean;
        mustChangePassword: boolean;
        createdAt: Date;
        company: {
            id: string;
            name: string;
            country: string;
            defaultCurrency: string;
        };
    }>;
    changePassword(userId: string, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    private setRefreshCookie;
}
