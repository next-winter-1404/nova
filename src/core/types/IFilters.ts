export interface IFilters {
    transactionType?: string;
    minRent?: string|number;
    maxRent?: string|number;
    propertyType?: string;
    sort?: string;
    location?: string;
    search?: string;
    minPrice?: string;
    maxPrice?: string;
    address?: string;
    page?: string | number;
    limit?: string | number;
  }