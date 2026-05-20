interface IUser {
    id?: number;
    role?: string;
    email?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    profilePicture?: string | null;
    phoneNumber?: string | null;
    emailVerified?: boolean;
    created_at?: string;
    membershipDate?: string | null;
    verificationCode?: string;
    verificationCodeExpires?: string;
    resetCode?: string | null;
    resetCodeExpires?: string | null;
    updated_at?: string;
  }
  
  interface IUserResponse {
    user?: IUser;
    additionalPercentage?: number;
  }