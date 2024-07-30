export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    resetToken?: string;
    resetTokenExpiry?: Date;
    createdAt: Date;
  }
  