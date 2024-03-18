import type { MetaFunction } from "@remix-run/node";
import TopRated from "~/components/top-rated/TopRated";
import OtherCats from "~/components/other-cats/OtherCats";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <TopRated />
      <OtherCats />
      {/* With lazy loading */}
    </>
  );
}
