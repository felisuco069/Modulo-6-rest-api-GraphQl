export interface Context {
  page: number;
  setPage: (value: number) => void;
  selection: string;
  setSelection: (value: string) => void;
  isViewPage: boolean;
  setIsViewPage: (value: boolean) => void;
  lastPage: number;
  setLastPage: (value: number) => void;
}
