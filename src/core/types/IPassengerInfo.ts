export interface IPassengerInfo {
    firstName : string
    lastName : string
    nationalId : string
    gender : string
    birthDate : string
}
export interface ITraveler{
    traveler_details? : IPassengerInfo[]
    sharedEmail? : string
    sharedMobile? : string
    id? : number | string
    houseId? :number | string
    reservedDates? : [string]
    firstName? : string
    lastName? : string
    nationalId? : string
    gender? : string
    birthDate? : string
}