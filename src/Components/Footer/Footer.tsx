import "./footer.css";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import { useState } from "react";

const current_date = new Date().getFullYear();

const links = [
  { name: "Privacy Policy", url: "#" },
  { name: "Cookies policy", url: "#" },
  { name: "Terms of use", url: "#" },
];

const Footer = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="footer_cont">
      <h1 className="title">Wallet</h1>
      <div className="footer_left_side">
        <h3>&copy; {current_date}</h3>

        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer_right_side">
        <h2>Updates right to your Inbox</h2>
        <div className="footer_input_cont">
          <input type="text" placeholder="Email Address" />
          <Button
            text_content="Send"
            class_text="primary"
            onClick={handleClick}
          />
        </div>
      </div>

      <Popup isVisible={isPopupVisible} onClose={closePopup} />
    </div>
  );
};

export default Footer;
