import Feature_Card from "../Feature_Card/Feature_Card";
import Feature_Img_1 from "../../assets/Feature_Section_Images/Img_1.svg";
import Feature_Img_2 from "../../assets/Feature_Section_Images/Img_2.svg";
import Feature_Img_3 from "../../assets/Feature_Section_Images/Img_3.svg";

import "./feature.css";

const feature_data = {
  card_1: {
    img_src: Feature_Img_1,
    title: "Customizable card",
    subtitle: "Custom your own card for your exact incomes and expenses needs.",
  },
  card_2: {
    img_src: Feature_Img_2,
    title: "No payment fee",
    subtitle: "Transfer your payment all over the world with no payment fee.",
  },
  card_3: {
    img_src: Feature_Img_3,
    title: "All in one place",
    subtitle:
      "The right place to keep your credit and debit cards, boarding passes & more.",
  },
};

const Feature = () => {
  return (
    <div className="feature_cont">
      <Feature_Card
        img_url={feature_data.card_1.img_src}
        title={feature_data.card_1.title}
        subtitle={feature_data.card_1.subtitle}
      />
      <Feature_Card
        img_url={feature_data.card_2.img_src}
        title={feature_data.card_2.title}
        subtitle={feature_data.card_2.subtitle}
      />
      <Feature_Card
        img_url={feature_data.card_3.img_src}
        title={feature_data.card_3.title}
        subtitle={feature_data.card_3.subtitle}
      />
    </div>
  );
};

export default Feature;
