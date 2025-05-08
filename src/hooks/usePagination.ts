import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

interface UsePaginationOptions {
  defaultPage?: number;
  updateTitle?: boolean;
  titlePrefix?: string;
}

export function usePagination(options: UsePaginationOptions = {}) {
  const {
    defaultPage = 1,
    updateTitle = false,
    titlePrefix = "Page"
  } = options;

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? Number.parseInt(pageParam, 10) : defaultPage;

  useEffect(() => {
    if (updateTitle) {
      document.title = `${titlePrefix} ${currentPage}`;
    }
  }, [currentPage, updateTitle, titlePrefix]);

  const setPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());
    setSearchParams(newParams);
  };

  return {
    currentPage,
    setPage,
    searchParams,
    setSearchParams
  };
}
