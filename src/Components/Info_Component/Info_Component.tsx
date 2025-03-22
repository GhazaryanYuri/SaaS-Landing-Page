import { useState } from "react";
import "./info_components.css";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";

interface Props {
  title: string;
  subtitle: string;
  button_text: string;
  img_url: string;
  img_cont_class_name?: string;
}

const Info_Component = ({
  title,
  subtitle,
  button_text,
  img_url,
  img_cont_class_name = "img_cont_primary",
}: Props) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <header className="header_cont">
      <div className="content_cont">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Button
          text_content={button_text}
          class_text="light_gold"
          onClick={handleClick}
        />
      </div>
      <div className={img_cont_class_name}>
        <img src={img_url} alt={img_url} />
      </div>

      <Popup isVisible={isPopupVisible} onClose={closePopup} />
    </header>
  );
};

export default Info_Component;
