'use client'
import { baseUrl, serverPaths } from "@/constants/api";
import { CatSmallCard } from "@/types/CatSmallCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [mostLikedCats, setMostLikedCats] = useState<CatSmallCard[]>([]); // State to store fetched data
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState<string | null>(null); // State for error handling
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(baseUrl + serverPaths.mostLikedCats);
      const data = await response.json();
      setMostLikedCats(data);
      console.log(data);
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

      {mostLikedCats.map((cat: CatSmallCard) => (
        <div key={cat._id}>
          {cat.name}
          {/* <CatSmallCard cat={cat} /> */}
        </div>
      ))}
    </>
  );
}
