export interface ICommentUser {
    firstName?: string;
    lastName?: string;
    profilePicture?: string | null;
  }
  
  export interface IComment {
    id?: number;
    house_id?: number;
    title?: string;
    caption?: string;
    rating?: string;
    created_at?: string;
    parent_comment_id?: number | null;
    user?: ICommentUser;
    parent_comment?: IComment | null;
  }
  
  export interface ICommentResponse {
    comments?: IComment[];  
    totalCount?: number;
    currentPage?: number;
    totalPages?: number;
  }