import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, closeModal, image }) => {
  Modal.setAppElement("#root");
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
      padding: "0",
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className={s.container}>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <div className={s.div}>
          <img
            className={s.img}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
