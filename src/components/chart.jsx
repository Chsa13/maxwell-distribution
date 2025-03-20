import React, { useRef, useState } from 'react';
import ColorPicker from './colorPicker';
import Inputs from './Inputs';
import DeleteButton from './DelleteButton';
import { Line } from 'react-chartjs-2';
import "./main.css"; // Импортируем CSS-файл

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
function dist(M, T){
  // M = 0.0078
  // T = 300
  let ans = []
  let R = 8.31;
  for (let v = 0; v<1700;v+=1){
    let y = 4 * Math.PI*((M/(2*Math.PI*R*T))**(3/2))*(v**2)*Math.exp(-(M * (v ** 2)) / (2 * R * T))
    ans.push({x:v, y:y})
  }
  return ans
}
let gas = "";
const Chart = () => {
  let inputs = {M: 0.028, T: 300}
  function changeInputs(n, g) {
    inputs = n
    gas = g
  }

  const chartRef = useRef("null")

  // Состояние для хранения datasets
  const [datasets, setDatasets] = useState([
  ]);
  // Функция для добавления нового графика
  function addDataset(){
    if (counter>= 20) return
    let g
    if (gas === "Не указан"){g = ""}
    else{
      g = gas.split(" ").slice(-1)[0].replace("(", "").replace(")", "") + "; "
    }
    const newDataset = {
      label: `${g}M = ${inputs.M} кг/моль, T = ${inputs.T} K`, // Динамическое название графика
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
  const data = {
    labels: Array.from({ length: 1700 }, (_, i) => i), // x от -10 до 10
    datasets: datasets, // Используем текущее состояние datasets
  };

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
        width: "calc(100vw - 15px )", // Занимает всю высоту экрана
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
        minWidth:"350px", 
        display:"flex", 
        alignItems: "center", 
        flexGrow: "1", 
        height: "calc( 45vh + 10vw )",
        // marginRight: "15px"
      }}>
        <Line ref= {chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;