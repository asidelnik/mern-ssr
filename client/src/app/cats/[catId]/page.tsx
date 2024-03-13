import CatFullCard from "@/components/cat-full-card/CatFullCard";
import { getCatById } from "@/data-fetching/functions";
import { CatType } from "@/types/CatType";
import { ParamsProps } from "@/types/ParamsProps";

export default async function CatPage({ params }: ParamsProps) {
  const catData = await getCatById<CatType>(params.catId);

  return (
    <>
      <CatFullCard {...catData} />
    </>
  )
}