import instance from "../../interseptor";
import { IBlogs } from "@/src/core/types/IBogs";

export const getBlogsDetail = async (id: number): Promise<IBlogs | null> => {
    try {
      const response = await instance.get(`/api/blogs/${id}`);
    //   console.log("API response for id", id, ":", response);
      
      
      if (!response ) {
        return null;
      }
      return response.data as IBlogs;
    } catch (error) {
      console.error(`Error fetching blog ${id}:`, error);
      return null;  
    }
  };
