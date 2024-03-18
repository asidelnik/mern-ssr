import { json, type MetaFunction } from "@remix-run/node";
import TopRated from "~/components/top-rated/TopRated";
import RecentlySearched from "~/components/recently-searched/RecentlySearched";
import { getTopRatedCats } from "~/requests/requests";
import { CatType } from "~/types/CatType";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Pets site" },
    { name: "description", content: "Lovely pets" },
  ];
};

export async function loader() {
  const cats = await getTopRatedCats<CatType[]>()
  return json(cats);
}

export default function Index() {
  const cats = useLoaderData<CatType[]>();

  return (
    <>
      <TopRated cats={cats} />
      <RecentlySearched />
      {/* With lazy loading */}
    </>
  );
}
