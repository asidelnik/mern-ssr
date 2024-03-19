import { defaultPaginationLimit } from "~/constants/api";
import c from "./SearchForm.module.css";
import { MdSearch } from "react-icons/md";

export default function SearchForm() {
  return (
    <>
      <div className={c.searchContainer}>
        <form method="get" action="/search">
          <input type="text" name="name" placeholder="Name search" />
          <input type="text" name="page" defaultValue={0} hidden />
          <input type="text" name="limit" defaultValue={defaultPaginationLimit} hidden />
          <button type="submit" className="button-base button-primary show-on-desktop">
            <MdSearch />
          </button>
        </form>
      </div>
    </>
  )
}