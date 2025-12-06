export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

export type WithIncluded<T> = Expand<T & { readonly included: readonly [] }>;

export interface CursorMeta {
  readonly count?: number | null;
  readonly has_next_page: boolean;
  readonly has_previous_page: boolean;
  readonly start_cursor: string | null;
  readonly end_cursor: string | null;
}

export interface OffsetMeta {
  readonly offset: number;
  readonly limit: number;
}

export type DataWithMeta<
  TName extends string,
  TData extends readonly unknown[],
> = {
  readonly [key in TName]: {
    readonly data: TData;
    readonly meta: CursorMeta;
  };
};
