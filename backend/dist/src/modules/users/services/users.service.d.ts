import { PrismaService } from '../../prisma/prisma.service';
import { EmailService } from '../../email/email.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { AssignRoleDto } from '../dto/assign-role.dto';
export declare class UsersService {
    private prisma;
    private emailService;
    private readonly logger;
    constructor(prisma: PrismaService, emailService: EmailService);
    findAll(companyId: string): Promise<{
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
        manager: {
            id: string;
            name: string;
            email: string;
        } | null;
    }[]>;
    findOne(id: string, companyId: string): Promise<{
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
        manager: {
            id: string;
            name: string;
            email: string;
        } | null;
    }>;
    create(companyId: string, dto: CreateUserDto): Promise<{
        user: {
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
            manager: {
                id: string;
                name: string;
                email: string;
            } | null;
        };
        temporaryPassword: string;
    }>;
    update(id: string, companyId: string, dto: UpdateUserDto): Promise<{
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
        manager: {
            id: string;
            name: string;
            email: string;
        } | null;
    }>;
    assignRole(id: string, companyId: string, dto: AssignRoleDto): Promise<{
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
        manager: {
            id: string;
            name: string;
            email: string;
        } | null;
    }>;
    assignManager(id: string, companyId: string, managerId: string): Promise<{
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
        manager: {
            id: string;
            name: string;
            email: string;
        } | null;
    }>;
    remove(id: string, companyId: string): Promise<{
        message: string;
    }>;
    private generateRandomPassword;
}
