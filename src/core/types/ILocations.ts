export interface ILocations {
  id: number;
  areaName: string ;
  lat: string;
  lng: string;
}

export interface LocationsResponse {
  data: ILocations[];
  totalCount: number;
}
