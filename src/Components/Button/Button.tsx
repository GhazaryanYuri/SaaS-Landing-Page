import "./button.css";

interface Props {
  text_content: string;
  class_text?: string;
  onClick?: () => void;
}

const Button = ({ text_content, class_text, onClick }: Props) => {
  return (
    <button className={class_text} onClick={onClick}>
      {text_content}
    </button>
  );
};

export default Button;
