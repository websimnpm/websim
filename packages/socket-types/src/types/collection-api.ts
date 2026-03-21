import type { KeyValue } from "./utils";

export type Prettify<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

type BaseData<$Type extends string, Id extends string = string> = {
  readonly id: Id;
  readonly $type: $Type;
  readonly created_at: string;
  readonly username: string;
};

export interface CollectionAPI<$Type extends string> {
  getList<Data extends KeyValue>(): Prettify<
    Data &
      BaseData<$Type> & {
        readonly updated_at: string;
        readonly user_id: string;
      }
  >[];
  create<Data extends KeyValue>(
    data: Data,
  ): Promise<Prettify<Data & BaseData<$Type>>>;
  update<Id extends string, Data extends KeyValue>(
    id: Id,
    data: Data,
  ): Promise<Prettify<Data & BaseData<$Type, Id>>>;
  upsert<Data extends KeyValue & { id?: Id }, Id extends string = string>(
    data: Data,
  ): Promise<
    Prettify<
      (Data extends { id: Id } ? Data & KeyValue : Data) & BaseData<$Type, Id>
    >
  >;
  delete(id: string): Promise<void>;
  subscribe(
    callback: (
      records: Prettify<
        KeyValue & {
          id: string;
          $type: $Type;
          created_at: string;
          updated_at: string;
          user_id: string;
          username: string;
        }
      >[],
    ) => void,
  ): () => void;
  filter(filters: KeyValue): CollectionAPI<$Type>;
}
