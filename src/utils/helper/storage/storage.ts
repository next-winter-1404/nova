const STORAGE_KEY = 'houseFormData';

export const saveToLocalStorage = (data: any) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('خطا در ذخیره سازی:', error);
    }
};

export const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.error('خطا در خواندن:', error);
        return {};
    }
};

export const clearLocalStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
};