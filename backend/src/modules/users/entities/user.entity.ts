import { Role } from '@prisma/client';

export class UserEntity {
  id: string;
  name: string;
  email: string;
  role: Role;
  companyId: string;
  managerId: string | null;
  isManagerApprover: boolean;
  mustChangePassword: boolean;
  createdAt: Date;
  updatedAt: Date;
  manager?: {
    id: string;
    name: string;
    email: string;
  };
}
