import "./popup.css";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const Popup = ({ isVisible, onClose }: PopupProps) => {
  if (!isVisible) return null;

  return (
    <div className="popup_cont">
      <h1>Functionality will be come as soon as possible!</h1>
      <button className="popup_btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Popup;
