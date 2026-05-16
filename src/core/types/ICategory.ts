export interface ICategory {
    id?: number;
  name?:string
  }
  
  export interface ICategoryResponse {
    data?: ICategory[];
    totalCount?: number;
  }