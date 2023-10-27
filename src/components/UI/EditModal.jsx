import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const EditModal = ({ title, value, onChange, onConfirm, onCancel, type }) => {
  return ReactDOM.createPortal(
    <>
      <OverlayStyles />
      <ModalCon>
        <div>
          <h2>{title}</h2> {/* Заголовок модального окна */}
          <input type={type} value={value} onChange={onChange} /> {/* Поле ввода */}
          <ModalButtons>
            <ButtonSave onClick={onConfirm}>Save</ButtonSave> {/* Кнопка сохранения */}
            <ButtonCancel onClick={onCancel}>Cancel</ButtonCancel> {/* Кнопка отмены */}
          </ModalButtons>
        </div>
      </ModalCon>
    </>,
    document.getElementById("portal") // Монтирование в портал с указанным id
  );
};

export default EditModal;

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
const ButtonSave = styled.button`
  background-color: green;
`;

const ButtonCancel = styled.button`
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
    text-align: center;
    h2 {
      margin-bottom: 1.6rem;
    }
    input {
      width: 12.5rem;
      height: 2rem;
      padding: 0.5rem;
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