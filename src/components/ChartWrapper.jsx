import React, { useRef, useState, useEffect } from 'react';
import ColorPicker from './ColorPicker';
import InputInText from './InputInText'
import Inputs from './Inputs';
import DeleteButton from './DelleteButton';
import { Line } from 'react-chartjs-2';
import throttle from 'lodash/throttle';

import "./main.css"; // Импортируем CSS-файл

const SimpleSlider = ({ value, setValue, delay }) => {
  const [i, setI] = useState(1700)
    const handleKeyDown = (e) => {
    // Разрешаем только цифры, Backspace, Delete, стрелки, запятую и точку
    if (
      !/[0-9]/.test(e.key) && // Цифры
      e.key !== "Backspace" && // Backspace
      e.key !== "Delete" && // Delete
      e.key !== "ArrowLeft" && // Стрелки
      e.key !== "ArrowRight" &&
      e.key !== "ArrowUp" &&
      e.key !== "ArrowDown" 
    ) {
      e.preventDefault(); // Запрещаем ввод
    }
  };
  const handleBlur = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue)
    // Если значение пустое, устанавливаем "0"
    if (inputValue === "") {
      inputHandler({target:{value:0}})
    }
  };
  function iChangeHandler(e) {
    console.log(e.target.value)
    if (e.target.value=="") {
      setI("")
      return
    }
    if (e.target.value>5000) {
      setValue(Number(5000)); 
      setI(5000)
      return
    };
    if (e.target.value<1000) {
      setI(Number(e.target.value))
      setValue(1000)
      return
    };
    setI(Number(e.target.value))
    setValue(Number(e.target.value))
  }
  return (
    <div style={{
      width: "100%",
      paddingTop: "20px",
      // marginBottom: "20px",
      // paddingBottom: "20px",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
    }}>
      <span style={{fontSize: "18px"}}>V</span><span style={{fontSize: "14px", marginTop: "8px", marginLeft: "-1px"}}>max</span><span></span><span style={{paddingLeft: "5px", paddingRight: "5px"}}>(м/с)</span> 
    <input
      className="custom-range"
      style={{
        minWidth: "150px",
        width: '30%', // Ширина ползунка
        height: '8px', // Высота ползунка
        borderRadius: '5px', // Закругление углов
        background: 'rgb(96, 203, 214)', // Цвет фона ползунка
        outline: 'none', // Убираем стандартный outline
        opacity: '0.7', // Прозрачность
        transition: 'opacity 0.2s', // Плавное изменение прозрачности
        WebkitAppearance: 'none', // Убираем стандартные стили для Webkit (Safari, Chrome)
        appearance: 'none', // Убираем стандартные стили для других браузеров
      }}
      type="range"
      min="1000"
      max="5000"
      step="50"
      value={value}
      onChange={(e) => {
        setValue(Number(e.target.value));
        setI(Number(e.target.value));
      }}
      onMouseUp={() => delay.flush()}
    />
      <input
        type ={"number"}
        step = {10}
        max = {5000}
        min={1000}
        style={{
          padding: "10px", // Отступы внутри input
          borderRadius: "8px", // Скругление углов
          border: "2px solid rgb(96, 203, 214)", // Рамка
          fontSize: "16px", // Размер текста
          outline: "none", // Убираем стандартный outline
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Лёгкая тень
          transition: "border-color 0.3s ease, box-shadow 0.3s ease", // Плавный переход
          width: "60px",
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
          // handleBlur(e)
          e.target.style.borderColor = "rgb(96, 203, 214)"; // Возврат цвета рамки
          e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // Возврат тени
        }}
        value={i}
        onChange={iChangeHandler}
        onBlur={() => delay.flush()}
      />
    </div>
  );
};
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Регистрируем необходимые компоненты Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const colors = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#800080", "#008000", "#000080",
  "#FF4500", "#8A2BE2", "#7FFF00", "#DC143C", "#00CED1", "#FFD700", "#8B4513", "#2E8B57", "#6A5ACD", "#FF69B4"
];
let counter = 1;
let gas = "";
const Chart = () => {
  const [ticks, setTicks] = useState(1700);
  const [delayedTicks, setDelayedTicks] = useState(1700);
    const [datasets, setDatasets] = useState([
  ]);

const throttledSetDelayedTicks = useRef(
  throttle((newTicks) => {
    setDelayedTicks(newTicks);
  }, 1000, { leading: false, trailing: true })
).current;

useEffect(() => {
  throttledSetDelayedTicks(ticks);
}, [ticks]);

  let inputs = {M: 0.028, T: 300}
  function changeInputs(n, g) {
    inputs = n
    gas = g
  }
const data = {
  labels: Array.from({ length: delayedTicks }, (_, i) => i),
  datasets: datasets.map((e) => {
    e.data = dist(e.p.M, e.p.T); // Функция dist тоже использует delayedTicks
    return e;
  }),
};

function dist(M, T) {
  let ans = [];
  let R = 8.31;
  for (let v = 0; v < delayedTicks; v += 1) {
    let y =
      4 *
      Math.PI *
      Math.pow(M / (2 * Math.PI * R * T), 3 / 2) *
      (v ** 2) *
      Math.exp((-M * (v ** 2)) / (2 * R * T));
    ans.push({ x: v, y: y });
  }
  return ans;
}
  const chartRef = useRef("null")
  function addDataset(){
    if (counter>= 20) return
    let g
    if (gas === "Не указан"){g = ""}
    else{
      g = gas.split(" ").slice(-1)[0].replace("(", "").replace(")", "") + "; "
    }
    const newDataset = {
      label: `${g}M = ${inputs.M} кг/моль, T = ${inputs.T} K`, // Динамическое название графика
      p: {M: inputs.M, T: inputs.T},
      data: dist(inputs.M, inputs.T),
      borderColor: colors[counter], // Случайный цвет
      tension: 0.4, // Плавная линия
      pointRadius: 0, // Отключаем отображение точек
    };
    counter++ 
    // Обновляем состояние, добавляя новый график
    setDatasets([...datasets, newDataset]);
  };

  // Функция для удаления графика
  const removeDataset = (index) => {
    const updatedDatasets = datasets.filter((_, i) => i !== index); // Удаляем график по индексу
    setDatasets(updatedDatasets);
  };

  // Функция для изменения цвета графика
  const changeDatasetColor = (index, newColor) => {
    const updatedDatasets = datasets.map((dataset, i) =>
      i === index ? { ...dataset, borderColor: newColor } : dataset
    );
    setDatasets(updatedDatasets);
  };

  // Данные для графика

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'V, м/с',
          align: 'end', // Подпись оси X будет справа
          font: {
            size: 18, // Размер шрифта
            // weight: 'bold', // Жирный шрифт
          },
        },
        ticks: {
          font: {
           size: 15, // Размер шрифта для меток оси X
          },
        },
      },
      y: {
        title: {
          display: true,
          align: 'end', // Подпись оси X будет справа
          text: 'f(V), с/м',
          font: {
            size: 20, // Размер шрифта
          },
        },
        ticks: {
          font: {
           size: 15, // Размер шрифта для меток оси X
          },
        },
      },
    },
  };

  return (
    <div id="chart-wrapper" style={{
      flexGrow: "1",
        display: "flex",
        width: "calc(100vw - 20px )", // Занимает всю высоту экрана
        padding: "10px", // Отступы по краям
        boxSizing: "border-box", // Учитываем padding в размерах
      }}>

      <div style={{margin: "20px", fontSize: "18px"}}>
        <div id={"inputs-wrapper"} style={{
          display: 'flex',
          borderBottom: "3px solid black",
          paddingBottom: "20px",
          marginBottom: "30px",
          alignItems: "center",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingRight: "20px",
          }}>
            <Inputs
              changeInputs={changeInputs}
            />
          </div>
          <button
              onClick={addDataset}
              style={{
                maxWidth: "300px",
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                flexGrow: "1",
                height: "65px",
                // marginBottom: '20px',
              }}
              title='Добавить график'
            >
              Добавить график
            </button>
        </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Графики: </h3>
        <div>
          {datasets.map((dataset, index) => {
            return(
            <div key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <span style={{
                paddingRight: '10px',
                marginRight: '10px',
                borderRight: "3px solid black",
              }}>{index+1}) {dataset.label}</span>
              <span style={{
                paddingRight: '7px',
              }}>Цвет:</span>
              <ColorPicker
                initialColor = {dataset.borderColor}
                colors = {colors}
                onColorSelect={(color)=>changeDatasetColor(index, color)}
              />
            <DeleteButton clickHandler={() => removeDataset(index)} text={"Удалить"} title={"Удалить график"}></DeleteButton>
            </div>
          )})}
        </div>
      </div>
      </div>
      <div id= "chart" style={{
        flexDirection: "column",
        minWidth:"350px", 
        display:"flex", 
        alignItems: "center", 
        flexGrow: "1", 
        height: "calc( 45vh + 10vw )",
        // marginRight: "15px"
      }}>
        <Line ref= {chartRef} data={data} options={options} />
        <SimpleSlider value={ticks} setValue={setTicks} delay={throttledSetDelayedTicks}/>
      </div>
    </div>
  );
};

export default Chart;