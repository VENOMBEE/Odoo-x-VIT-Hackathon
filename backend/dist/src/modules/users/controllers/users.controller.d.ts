import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { AssignRoleDto } from '../dto/assign-role.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    create(dto: CreateUserDto, companyId: string): Promise<{
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
    update(id: string, dto: UpdateUserDto, companyId: string): Promise<{
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
    assignRole(id: string, dto: AssignRoleDto, companyId: string): Promise<{
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
    assignManager(id: string, managerId: string, companyId: string): Promise<{
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
}
