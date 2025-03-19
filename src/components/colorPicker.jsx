import React, { useState } from "react";

const ColorPicker = ({ initialColor, onColorSelect, colors }) => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false); // Состояние палитры
  const [selectedColor, setSelectedColor] = useState(initialColor); // Выбранный цвет

  const handleColorSelect = (color) => {
    setSelectedColor(color); // Обновляем выбранный цвет
    onColorSelect(color);    // Передаем выбранный цвет в родительский компонент
    setIsPaletteOpen(false); // Закрываем палитру
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Кнопка для выбора цвета */}
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "5px",
          backgroundColor: initialColor,
          // border: "1px solid #000",
          cursor: "pointer",
        }}
        title = {"Изменить текст"}
        onClick={() => setIsPaletteOpen(!isPaletteOpen)} // Открываем/закрываем палитру
      />

      {/* Палитра цветов */}
      {isPaletteOpen && (
        <div
          style={{
            position: "absolute",
            left: "-95px",
            top: "35px", // Размещаем палитру под кнопкой
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            width: "220px", // Ширина палитры
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: color,
                border: color === selectedColor ? "3px solid black" : "3px solid #ccc", // Обводим выбранный цвет
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;