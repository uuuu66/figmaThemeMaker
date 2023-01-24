import { PageType } from "../enums";

export interface MessageType<T = {}> {
  type: string;

  value?: T;
}

export interface DataListType<T = string> {
  value: T;
  label: string;
}
export interface PageProps {
  page?: PageType;
  setPage?: (e: PageType) => void;
}
