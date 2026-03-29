import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { SignupDto } from '../dto/signup.dto';
import { LoginDto } from '../dto/login.dto';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { CurrencyService } from '../../currency/currency.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    private configService;
    private currencyService;
    private readonly logger;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService, currencyService: CurrencyService);
    signup(dto: SignupDto): Promise<{
        accessToken: string;
        refreshToken: string;
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
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
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
    refreshTokens(userId: string, email: string, role: string, oldRefreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: string): Promise<{
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
    private generateTokens;
    private storeRefreshToken;
}
