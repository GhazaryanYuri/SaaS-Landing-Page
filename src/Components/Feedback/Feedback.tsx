import "./feedback.css";
import User_Img from "../../assets/Feedback/user_img.png";
import Stars from "../../assets/Feedback/stars.png";

const feedback_data = {
  message:
    "“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”",
  user_name: "Johnny Owens",
};

const Feedback = () => {
  return (
    <div className="feedback_cont">
      <div className="feedback_inner">
        <h1 className="message_content">{feedback_data.message}</h1>
        <div className="user_info_cont">
          <img src={User_Img} alt="User Img" />
          <div className="about_user">
            <h1>{feedback_data.user_name}</h1>
            <img src={Stars} alt="Stars" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
