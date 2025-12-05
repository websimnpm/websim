import type { KeyValue } from "./utils";

export interface QueryAPI<T extends readonly KeyValue[] = readonly KeyValue[]>
  extends PromiseLike<T> {
  getList(): Promise<T>;
  subscribe(callback: (records: T) => void): () => void;
}
