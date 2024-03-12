import c from './CatsSearch.module.scss';
import CatSmallCard from "@/components/cat-small-card/CatSmallCard";
import getCatsByName from '@/data-fetching/getCatsByName';
import { CatType } from "@/types/CatType";
import { useSearchParams } from "next/navigation";

export default async function CatsSearchSuspensed() {
  const searchParams = useSearchParams();
  const catName = searchParams.get('name');
  console.log('catName', catName)
  const cats = await getCatsByName<CatType[]>(catName)

  return (
    <>
      {catName !== null && cats?.length > 0 && (
        <>
          <div>
            <p>Searched: {catName}</p>
            <div className={c.cardsContainer}>
              {cats.map((cat: CatType) => (
                <CatSmallCard key={cat._id} {...cat} />
              ))}
            </div>
          </div>
        </>
      )}
      {catName !== null && cats?.length === 0 && <div className="main-container-message"><h2>No cats found</h2></div>}
    </>
  )
}