'use client'
import { baseUrl, serverPaths } from '@/constants/api';
import { CatSmallCard } from '@/types/CatSmallCard';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

export default function CatsSearch() {
  const [cats, setCats] = useState<CatSmallCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const catName = searchParams.get('name');
  // Use catName as a query param in a get request
  useEffect(() => {
    if (catName) {
      fetchData(catName);
    }
  }, [catName]);

  const fetchData = async (name: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(baseUrl + serverPaths.catSearch + `?name=${name}`);
      const data = await response.json();
      setCats(data);
      console.log('cats-search', data);
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
      <div>Cats Search</div>
      <Suspense fallback={<div>Loading...</div>}>
        {cats.map((cat: CatSmallCard) => (
          <div key={cat._id}>
            {cat.name}
            {/* <CatSmallCard cat={cat} /> */}
          </div>
        ))}
      </Suspense>
    </>
  )
}