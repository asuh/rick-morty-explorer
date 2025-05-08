import { useSearchParams } from "react-router-dom";

export function useReturnPage(defaultPage = "1") {
  const [searchParams] = useSearchParams();
  const fromPage = searchParams.get("from") || defaultPage;
  
  return {
    fromPage,
    returnUrl: `/?page=${fromPage}`
  };
}
