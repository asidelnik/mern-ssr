import c from './HomePage.module.scss';
import CatSmallCard from "@/components/cat-small-card/CatSmallCard";
import { baseUrl, serverPaths } from "@/constants/api";
import { CatType } from "@/types/CatType";
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {
  const cats = await getCats<CatType[]>()

  return (
    <>
      <Suspense fallback={<Loading />}>
        {cats?.length > 0 && (
          <>
            <p>Top rated cats</p>
            <div className={c.cardsContainer}>
              {cats.map((cat: CatType) => (
                <CatSmallCard key={cat._id} {...cat} />
              ))}
            </div>
          </>
        )
        }
      </Suspense>
    </>
  );
}


async function getCats<T>(): Promise<T> {
  const path = `${baseUrl}${serverPaths.mostLikedCats}`;
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json() as Promise<T>;
};