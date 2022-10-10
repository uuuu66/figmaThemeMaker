export interface MessageType<T = {}> {
  type: string;

  value?: T;
}
