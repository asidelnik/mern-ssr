import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({
  request,
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  return json({ name });
};

export default function Search() {
  const { name } = useLoaderData<typeof loader>();
  return (
    <>
      <h1>Search</h1>
      <p>Searched for: {name}</p>
    </>
  )
}

