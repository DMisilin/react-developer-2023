export type InfoType = {
  name: string;
  weight: number;
  height: number;
  abilities: string[];
};

export type InitialStoreType = {
  loadingList: boolean;
  loadingInfo: boolean;
  ratingList: string[];
  info: InfoType;
  errorList: null;
  errorInfo: null;
};
