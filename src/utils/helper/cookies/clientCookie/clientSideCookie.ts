
export const setClientCookie = (key: string, value: string, options?: { expires?: Date }) => {
    if (typeof window === 'undefined') return; 
    
    document.cookie = `${key}=${value}; path=/; ${
      options?.expires ? `expires=${options.expires.toUTCString()}` : ''
    }`;
  };
  
  export const getClientCookie = (key: string) => {
    if (typeof window === 'undefined') return null; 
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${key}=`);
    
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    }
    return null;
  };
  
  export const removeClientCookie = (key: string) => {
    if (typeof window === 'undefined') return; 
    
    document.cookie = `${key}=; Max-Age=-99999999; path=/`;
  };