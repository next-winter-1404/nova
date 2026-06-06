export interface User {
  id?: number;
  email?: string;
  fullName?: string;
  phoneNumber?: string | null;
  role?: string;
}

export interface SellerUpgradeRequest {
  id?: number ;
  userId?: number;
  message?: string;
  status?: string;
  reviewedBy?: number | null;
  adminNote?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  user?: User;
}

export interface SellerUpgradeRequestsResponse {
  totalCount: number;
  requests: SellerUpgradeRequest[];
  currentPage: number;
  totalPages: number;
}
