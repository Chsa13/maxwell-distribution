import React from "react";
export default function ({textStart, textEnd, inputHandler, inputs, type, step}) {
  let lastVal = 0
    // Обработчик нажатия клавиш
  const handleKeyDown = (e) => {
    // Разрешаем только цифры, Backspace, Delete, стрелки, запятую и точку
    if (
      !/[0-9]/.test(e.key) && // Цифры
      e.key !== "Backspace" && // Backspace
      e.key !== "Delete" && // Delete
      e.key !== "ArrowLeft" && // Стрелки
      e.key !== "ArrowRight" &&
      e.key !== "ArrowUp" &&
      e.key !== "ArrowDown" &&
      e.key !== "," && // Запятая
      e.key !== "." // Точка
    ) {
      e.preventDefault(); // Запрещаем ввод
    }
  };
  const handleBlur = (e) => {
    const inputValue = e.target.value;
    // Если значение пустое, устанавливаем "0"
    if (inputValue === "") {
      inputHandler({target:{value:0}})
    }
  };
  return (
    <div style={{paddingBottom: "20px"}}>
      <span style={{whiteSpace: "nowrap"}}>{textStart}: </span>
      <input
        style={{
          width: "100%", // Ширина на весь контейнер
          padding: "10px", // Отступы внутри input
          borderRadius: "8px", // Скругление углов
          border: "2px solid rgb(96, 203, 214)", // Рамка
          fontSize: "16px", // Размер текста
          outline: "none", // Убираем стандартный outline
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Лёгкая тень
          transition: "border-color 0.3s ease, box-shadow 0.3s ease", // Плавный переход
          width: "80px",
          height: "20px",
          marginLeft: "4px",
          marginRight: "10px",
          fontSize: "17px",
        }}
        onKeyDown={handleKeyDown}
        onFocus={(e) => {
          e.target.style.borderColor = "#2196F3"; // Изменение цвета рамки при фокусе
          e.target.style.boxShadow = "0 0 0 2px rgba(33, 150, 243, 0.2)"; // Тень при фокусе
        }}
        onBlur={(e) => {
          handleBlur(e)
          e.target.style.borderColor = "rgb(96, 203, 214)"; // Возврат цвета рамки
          e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // Возврат тени
        }}
        value={inputs[type]}
        type='number'
        onInput={inputHandler}
        min="0"
        step={step}
        >
      </input>
      <span style={{whiteSpace: "nowrap"}}>{textEnd}</span>
    </div>
  )
}