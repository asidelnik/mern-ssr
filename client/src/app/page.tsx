import c from './HomePage.module.scss';
import CatSmallCard from "@/components/cat-small-card/CatSmallCard";
import { getTopRatedCats } from '@/data-fetching/functions';
import { CatType } from "@/types/CatType";

export default async function Home() {
  const cats = await getTopRatedCats<CatType[]>()

  return (
    <>
      {cats?.length > 0 && (
        <>
          <div className={c.cardsContainer}>
            {cats.map((cat: CatType) => (
              <CatSmallCard key={cat._id} {...cat} />
            ))}
          </div>
        </>
      )}
    </>
  );
}