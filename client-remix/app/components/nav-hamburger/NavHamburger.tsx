import { useState } from "react";
import NavComponentMobile from "../nav-component-mobile/NavComponentMobile";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavHabmurger() {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const handleButtonClick = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };
  return (
    <>
      <button type="button" className="button-base button-primary" onClick={handleButtonClick}>
        <GiHamburgerMenu />
      </button>
      {isMobileNavVisible && <NavComponentMobile />}
    </>
  )
}