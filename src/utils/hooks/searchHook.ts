"use client";

import { useMemo } from "react";
import { useDebounce } from "use-debounce";

type FilterFunction<T> = (
  data: T[],
  query: string
) => T[];

function useSearch<T>(
  data: T[] = [],
  query: string = "",
  ...filters: FilterFunction<T>[]
) {
  const [debouncedQuery] = useDebounce(query.trim(), 300);

  return useMemo(() => {
    const dataArray = Array.isArray(data) ? data : [data];

    if (!debouncedQuery) return dataArray;

    try {
      return filters.reduce(
        (acc, feature) => feature(acc, debouncedQuery),
        dataArray
      );
    } catch (error) {
      console.error("Error applying search features:", error);
      return dataArray;
    }
  }, [data, debouncedQuery, ...filters]);
}

export default useSearch;