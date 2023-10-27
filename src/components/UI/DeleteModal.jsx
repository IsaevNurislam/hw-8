import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const DeleteModal = ({ title, message, onConfirm, onCancel }) => {
  return ReactDOM.createPortal(
    <>
      <OverlayStyles /> {/* Подложка */}
      <ModalCon>
        <div>
          <h2>{title}</h2> {/* Заголовок модального окна */}
          <p>{message}</p> {/* Сообщение модального окна */}
          <ModalButtons>
            <ButtonYes onClick={onConfirm}>Yes</ButtonYes>{" "}
            {/* Кнопка подтверждения */}
            <ButtonNo onClick={onCancel}>No</ButtonNo> {/* Кнопка отмены */}
          </ModalButtons>
        </div>
      </ModalCon>
    </>,
    document.getElementById("portal")
  );
};

export default DeleteModal;

const ModalButtons = styled.div`
  display: flex;
  gap: 7rem;
  justify-content: center;
  margin-top: 3rem;
  button {
    border: none;
    width: 5rem;
    height: 2rem;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
  }
`;
const ButtonYes = styled.button`
  background-color: green;
`;

const ButtonNo = styled.button`
  background-color: red;
`;

const ModalCon = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  div {
    color: #000;
    h2{
      text-align: center;
    }
  }
  border: 1px solid #000;
  border-radius: 20px;
`;

const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
