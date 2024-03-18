import NavComponent from '../nav-component/NavComponent'
import NavHabmurger from '../nav-hamburger/NavHamburger'
// import SearchForm from '../search-form/SearchForm'
import c from './MainHeader.module.css'
export default function MainHeader() {
  return (
    <>
      <header className={c.header}>
        <div className={c.left}>
          <h2>Remix Cats</h2>
          <NavComponent />
        </div>
        <div className={c.right}>
          {/* <SearchForm /> */}
          <div className="show-on-mobile">
            <NavHabmurger />
          </div>
        </div>
      </header>
    </>
  )
}