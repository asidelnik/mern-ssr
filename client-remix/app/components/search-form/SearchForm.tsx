import c from "./SearchForm.module.css";
import { MdSearch } from "react-icons/md";

export default function SearchForm() {
  return (
    <>
      <div className={c.searchContainer}>
        <form method="get" action="/search">
          <input name="name" type="text" placeholder="Name search" />
          <button type="submit" className="button-base button-primary show-on-desktop">
            <MdSearch />
          </button>
        </form>
      </div>
    </>
  )
}