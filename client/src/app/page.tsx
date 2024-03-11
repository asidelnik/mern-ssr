'use client'
import c from './HomePage.module.scss';
import CatSmallCard from "@/components/cat-small-card/CatSmallCard";
import { baseUrl, serverPaths } from "@/constants/api";
import { CatType } from "@/types/CatType";
import { useEffect, useState } from "react";

export default function Home() {
  const [cats, setCats] = useState<CatType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const path = `${baseUrl}${serverPaths.mostLikedCats}`;
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
  };

  return (
    <>

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

      {isLoading && <div className="main-container-message">Loadingggg...</div>}
      {error && <div className="main-container-message">Error getting cats</div>}
    </>
  );
}
