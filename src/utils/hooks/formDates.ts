export const formatDateTime = (date?: string | Date|null) => {
    if (!date) return "--";
  
    return new Date(date).toLocaleDateString("fa-IR");
  };