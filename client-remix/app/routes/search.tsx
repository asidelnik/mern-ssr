import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCatsByName } from "~/requests/requests";
import { CatType } from "~/types/CatType";

export const loader = async ({
  request,
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  const cats = await getCatsByName<CatType>(name);
  return json({ name, cats });
};

export default function Search() {
  const { name, cats } = useLoaderData<typeof loader>();
  console.log({ cats })
  return (
    <>
      <h1>Search</h1>
      <p>Searched for: {name}</p>
    </>
  )
}

