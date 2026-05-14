export interface IStatePicker {
    value?:string,
    onChange?: (value: string) => void;
}

export interface ITimePicker {
    paramKey:string,
    placeholder:string,
    labelText?:string,
    value?:string,
    onChange?: (value: string) => void;
}