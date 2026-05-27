export interface INotification {
    id?: number;
    userId?: number;
    title?: string;
    message?: string;
    type?: string;
    data?: any;
    isRead?: boolean;
    createdAt?: string;
    updatedAt?: string;
    created_at?: string;
    updated_at?: string;
  }
  
  export interface INotificationsResponse {
    data: INotification[];
    totalCount: number;
  }