import type { KeyValue, Expand } from "./utils";

export interface CollectionAPI<T extends string> {
  getList: <TData extends KeyValue>() => Expand<
    TData & {
      readonly id: string;
      readonly $type: T;
      readonly created_at: string;
      readonly updated_at: string;
      readonly user_id: string;
      readonly username: string;
    }
  >[];
  create: <TData extends KeyValue>(
    data: TData,
  ) => Promise<
    Expand<
      TData & {
        readonly id: string;
        readonly $type: T;
        readonly created_at: string;
        readonly username: string;
      }
    >
  >;
  update: <T_Id extends string, TData extends KeyValue>(
    id: T_Id,
    data: TData,
  ) => Promise<
    Expand<
      TData & {
        readonly id: T_Id;
        readonly $type: T;
        readonly created_at: string;
        readonly username: string;
      }
    >
  >;
  upsert: <
    TData extends KeyValue & { id?: T_Id },
    T_Id extends string = string,
  >(
    data: TData,
  ) => Promise<
    Expand<
      (TData extends { id: T_Id } ? TData & KeyValue : TData) & {
        readonly id: T_Id;
        readonly $type: T;
        readonly created_at: string;
        readonly username: string;
      }
    >
  >;
  delete: (id: string) => Promise<void>;
  subscribe: (
    callback: (
      records: Expand<
        KeyValue & {
          id: string;
          $type: T;
          created_at: string;
          updated_at: string;
          user_id: string;
          username: string;
        }
      >[],
    ) => void,
  ) => () => void;
  filter: (filters: KeyValue) => CollectionAPI<T>;
}
