'use client'
import { baseUrl, serverPaths } from "@/constants/api";
import { CatSmallCard } from "@/types/CatSmallCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [cats, setCats] = useState<CatSmallCard[]>([]);
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
      const data: CatSmallCard[] = await response.json();
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

      {cats.map((cat: CatSmallCard) => (
        <div key={cat._id}>
          {cat.name}
          {/* <CatSmallCard cat={cat} /> */}
        </div>
      ))}
    </>
  );
}
