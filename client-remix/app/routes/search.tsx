import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import SearchResults from "~/components/search-results/SearchResults";
import { getCatsByName } from "~/requests/requests";
import { CatSmallCardType } from "~/types/CatSmallCardType";

export const loader = async ({
  request,
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  const cats = await getCatsByName<CatSmallCardType[]>(name);
  return json(cats);
};

export default function Search() {
  const cats = useLoaderData<CatSmallCardType[]>();
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name')
  return (
    <>
      <SearchResults name={name} cats={cats} />
    </>
  )
}

