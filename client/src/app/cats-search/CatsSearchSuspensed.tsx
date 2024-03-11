import c from './CatsSearch.module.scss';
import CatSmallCard from "@/components/cat-small-card/CatSmallCard";
import { baseUrl, serverPaths } from "@/constants/api";
import { CatType } from "@/types/CatType";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CatsSearchSuspensed() {
  const [cats, setCats] = useState<CatType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const catName = searchParams.get('name');

  useEffect(() => {
    console.log('catName', catName, typeof catName);
    if (catName) {
      fetchData(catName);
    }
  }, [catName]);

  const fetchData = async (name: string) => {
    setIsLoading(true);
    try {
      const path = `${baseUrl}${serverPaths.catSearch}?name=${name}`;
      const response = await fetch(path);
      const data: CatType[] = await response.json();
      setCats(data || []);
    } catch (err: unknown) {
      if (err instanceof TypeError) {
        // Handle fetch TypeError
        setError((err as TypeError).message);
      } else {
        // Handle generic errors
        setError((err as Error).message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {cats?.length > 0 && (
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
      {isLoading && <div className="main-container-message">Loadingggg...</div>}
      {!isLoading && !catName && <div className="main-container-message">No cats searched</div>}
      {!isLoading && catName && cats?.length == 0 && <div className="main-container-message">No cats found</div>}
    </>
  )
}