
export interface IUser {
    id: number;
    role: string; 
    membershipDate: string; 
    email: string;
    phoneNumber: string;
    emailVerified: boolean;
    verificationCode: string | null;
    verificationCodeExpires: string | null;   
    resetCode: string | null;
    resetCodeExpires: string | null;
    fullName: string | null;
    firstName: string | null;
    lastName: string | null;
    profilePicture: string | null;
    created_at: string;
    updated_at: string;
  }
  
 
  
