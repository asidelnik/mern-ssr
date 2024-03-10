'use client'
import CatSmallCard from "@/components/cat-small-card/CatSmallCard";
import { baseUrl, serverPaths } from "@/constants/api";
import { CatType } from "@/types/CatType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [cats, setCats] = useState<CatType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const path = `${baseUrl}${serverPaths.mostLikedCats}`;
      const response = await fetch(path);
      const data: CatType[] = await response.json();
      setCats(data);
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

  function search(formData: FormData) {
    const catName = formData.get("cat-name");
    router.push(`/cats-search?name=${catName}`);
  }

  return (
    <>
      <form action={search}>
        <input type="text" name="cat-name" placeholder="Cat name search" />
        <button type="submit">Search</button>
      </form>

      {cats.map((cat: CatType) => (
        <div key={cat._id}>
          <CatSmallCard {...cat} />
        </div>
      ))}
    </>
  );
}
