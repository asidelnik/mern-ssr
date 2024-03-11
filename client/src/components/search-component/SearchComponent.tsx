'use client'
import c from "./SearchComponent.module.scss";
import { useRouter } from "next/navigation";

export default function SearchComponent() {
  const router = useRouter();

  function search(formData: FormData) {
    const catName = formData.get("cat-name");
    router.push(`/cats-search?name=${catName}`);
  }
  return (
    <>
      <div className={c.searchContainer}>
        <form action={search}>
          <input type="text" name="cat-name" placeholder="Name search" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  )
}