import { useParams } from "@remix-run/react";
export default function CatId() {
  const { id } = useParams();
  return (
    <>
      <h1>Cat: {id}</h1>
    </>
  )
}