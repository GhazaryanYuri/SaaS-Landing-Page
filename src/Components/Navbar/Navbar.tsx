import "./navbar.css";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import { useState } from "react";

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <nav>
      <h1 className="title">Wallet</h1>
      <div className="buttons_cont">
        <Button text_content="Sign up" onClick={handleClick} />
        <Button
          text_content="Login"
          class_text="primary"
          onClick={handleClick}
        />
      </div>

      <Popup isVisible={isPopupVisible} onClose={closePopup} />
    </nav>
  );
};

export default Navbar;
