export interface IAirbitTag {
  id: number;
  name: string;
}
export interface IAutoCompleteItem {
  beatsCount: number;
  id: number;
  name: string;
}

export interface ITopSellingItem {
  data: {
    genre: string;
    soldCount: number;
  },
  tags: IAirbitTag[];
  plays: number;
  name: string;
}

export interface IAirbitData<T> {
  items: T[];
}
