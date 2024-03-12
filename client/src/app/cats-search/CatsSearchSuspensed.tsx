import c from './CatsSearch.module.scss';
import CatSmallCard from "@/components/cat-small-card/CatSmallCard";
import { baseUrl, serverPaths } from "@/constants/api";
import { CatType } from "@/types/CatType";
import { useSearchParams } from "next/navigation";

export default async function CatsSearchSuspensed() {
  const searchParams = useSearchParams();
  const catName = searchParams.get('name');
  const cats = await getCats<CatType[]>(catName)

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


async function getCats<T>(name: string | null): Promise<T> {
  if (name === null) {
    throw new Error('No cat searched')
  }
  const path = `${baseUrl}${serverPaths.catSearch}?name=${name}`;
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error('Please try later')
  }
  return res.json() as Promise<T>;
};