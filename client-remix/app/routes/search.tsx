import c from '~/route-css-modules/search/Search.module.css';
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import SearchResults from "~/components/search-results/SearchResults";
import { getCatsByName } from "~/requests/requests";
import { SearchResponseType } from '~/types/SearchResponseType';
import Pagination from '~/components/pagination/Pagination';
import { defaultPaginationLimit } from '~/constants/api';

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") || '';
  const page = parseInt(url.searchParams.get("page") || '0');
  const limit = parseInt(url.searchParams.get("limit") || defaultPaginationLimit.toString());

  const data = await getCatsByName<SearchResponseType>(name, page, limit);
  return json(data);
}

export default function Component() {
  const { catsCount, cats } = useLoaderData<SearchResponseType>();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || '';
  const limit = parseInt(searchParams.get("limit") || defaultPaginationLimit.toString());
  const page = parseInt(searchParams.get("page") || '0');
  const totalPages = Math.ceil(catsCount / limit);

  return (
    <>
      {name !== null && cats && cats?.length > 0 && (
        <>
          <div className={c.container}>
            <p>Searched: <span className={c.searchedValue}>{name || ""}</span></p>
            <SearchResults cats={cats} />
            <Pagination name={name} currentPage={page} limit={limit} totalPages={totalPages} />
          </div>
        </>
      )}
      {name !== null && cats?.length === 0 && <div className="main-container-message"><h2>No cats found</h2></div>}
    </>
  )
}

