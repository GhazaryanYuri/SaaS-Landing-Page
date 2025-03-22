import "./feature_card.css";

interface Props {
  img_url: string;
  title: string;
  subtitle: string;
}

const Feature_Card = ({ img_url, title, subtitle }: Props) => {
  return (
    <div className="feature_card_cont">
      <img src={img_url} alt={img_url} />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Feature_Card;
