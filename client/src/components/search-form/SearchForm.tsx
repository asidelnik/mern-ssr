'use client'
import c from "./SearchForm.module.scss";
import { useRouter } from "next/navigation";
import { MdSearch } from "react-icons/md";

export default function SearchForm() {
  const router = useRouter();

  function searchHandler(formData: FormData) {
    const catName = formData.get("cat-name");
    router.push(`/search?name=${catName}`);
  }

  return (
    <>
      <div className={c.searchContainer}>
        <form action={searchHandler}>
          <input type="text" name="cat-name" placeholder="Name search" />
          <button type="submit" className="button-base button-primary show-on-desktop">
            <MdSearch />
          </button>
        </form>
      </div>
    </>
  )
}