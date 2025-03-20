import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaBook, FaTimes } from 'react-icons/fa'; // Импортируем иконку книжки и крестика

// Указываем корневой элемент для модального окна
Modal.setAppElement('#root');

// Стили для модального окна
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '370px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative', // Для позиционирования крестика
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

// Компонент с иконкой книжки
const BookIcon = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Открыть модальное окно
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Закрыть модальное окно
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {/* Иконка книжки */}
      <div
        onClick={openModal}
        style={{
          cursor: 'pointer',
          fontSize: '24px',
          color: '#007bff',
        }}
      >
        <FaBook />
      </div>

      {/* Модальное окно */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Информация"
      >
        {/* Крестик для закрытия */}
        <div
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#666',
          }}
        >
          <FaTimes />
        </div>

        {/* Содержимое модального окна */}
        <h2 style = {{
          textAlign: "center",
        }}>Информация</h2>
        <p>
          <a href={"https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9C%D0%B0%D0%BA%D1%81%D0%B2%D0%B5%D0%BB%D0%BB%D0%B0"}>Распределение Максвелла</a> описывает распределение скоростей молекул идеального газа в термодинамическом равновесии. Оно показывает, как вероятности различных скоростей молекул распределены при заданной температуре.
        </p>
        <p>
          Вы можете выбрать газ из списка и тогда его молярная масса автоматически подставится в поле выбора молярной массы.
        </p>
      </Modal>
    </div>
  );
};

export default BookIcon;