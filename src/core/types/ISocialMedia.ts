export interface ISocialMedia {
    id : number,
    platform? : string,
    url? : string
}

export interface ISocialMediaResponse {
    data ? : ISocialMedia[],
    totalCount ? : number
}