export interface IBlogs {
    id: number;
    title?: string;
    caption?: string;
    estimated_reading_time?: string;
    author_id?: number;
    created_at?: string;
    category_id?: number;
  }
  
  export interface IBlogsResponse {
    data?: IBlogs[];
    totalCount?: number;
  }