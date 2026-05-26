export interface ILocations {
  id: number;
  areaName: string | null;
  lat: string;
  lng: string;
}

export interface LocationsResponse {
  data: ILocations[];
  totalCount: number;
}
