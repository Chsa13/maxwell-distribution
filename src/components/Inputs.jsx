import React, { useState } from "react";
import InputInText from "./InputInText";
import Select from "react-select";

const options = [
  { value: "0", label: "Не указан", molarMass: 0 },
  { value: "N2", label: "Азот (N2)", molarMass: 0.028 },
  { value: "NH3", label: "Аммиак (NH3)", molarMass: 0.017 },
  { value: "Ar", label: "Аргон (Ar)", molarMass: 0.04 },
  { value: "C2H2", label: "Ацетилен (C2H2)", molarMass: 0.026 },
  { value: "C3H6O", label: "Ацетон (C3H6O)", molarMass: 0.058 },
  { value: "C4H10-1", label: "Н-бутан (C4H10)", molarMass: 0.058 },
  { value: "C4H10-2", label: "Изо-бутан (C4H10)", molarMass: 0.058 },
  { value: "C4H10O", label: "Н-бутиловый спирт (C4H10O)", molarMass: 0.074 },
  { value: "H2O", label: "Вода (H2O)", molarMass: 0.018 },
  { value: "H2", label: "Водород (H2)", molarMass: 0.002 },
  { value: "Air", label: "Воздух (сухой)", molarMass: 0.029 },
  { value: "C6H14", label: "Н-гексан (C6H14)", molarMass: 0.086 },
  { value: "He", label: "Гелий (He)", molarMass: 0.004 },
  { value: "C7H16", label: "Н-гептан (C7H16)", molarMass: 0.100 },
  { value: "CO2", label: "Двуокись углерода (CO2)", molarMass: 0.044 },
  { value: "C10H22", label: "Н-декан (C10H22)", molarMass: 0.142 },
  { value: "C12H10", label: "Дифенил (C12H10)", molarMass: 0.154 },
  { value: "C12H10O", label: "Дифениловый эфир (C12H10O)", molarMass: 0.169 },
  { value: "CH2Cl2", label: "Дихлорметан (CH2Cl2)", molarMass: 0.085 },
  { value: "C4H10O-2", label: "Диэтиловый эфир (C4H10O)", molarMass: 0.074 },
  { value: "N2O", label: "Закись азота (N2O)", molarMass: 0.044 },
  { value: "HJ", label: "Йодистый водород (HJ)", molarMass: 0.128 },
  { value: "O2", label: "Кислород (O2)", molarMass: 0.032 },
  { value: "Kr", label: "Криптон (Kr)", molarMass: 0.084 },
  { value: "Xe", label: "Ксенон (Xe)", molarMass: 0.131 },
  { value: "CH4", label: "Метан (CH4)", molarMass: 0.016 },
  { value: "CH5N", label: "Метиламин (CH5N)", molarMass: 0.031 },
  { value: "CH4O", label: "Метиловый спирт (CH4O)", molarMass: 0.032 },
  { value: "Ne", label: "Неон (Ne)", molarMass: 0.020 },
  { value: "NOCl", label: "Нитрозилхлорид (NOCl)", molarMass: 0.066 },
  { value: "O3", label: "Озон (O3)", molarMass: 0.048 },
  { value: "NO", label: "Окись азота (NO)", molarMass: 0.030 },
  { value: "CO", label: "Окись углерода (CO)", molarMass: 0.028 },
  { value: "C8H18", label: "Н-октан (C8H18)", molarMass: 0.114 },
  { value: "C5H12-1", label: "Н-пентан (C5H12)", molarMass: 0.072 },
  { value: "C5H12-2", label: "Изо-пентан (C5H12)", molarMass: 0.072 },
  { value: "C3H8", label: "Пропан (C3H8)", molarMass: 0.044 },
  { value: "C3H6", label: "Пропилен (C3H6)", molarMass: 0.042 },
  { value: "H2Se", label: "Селеновая кислота (H2Se)", molarMass: 0.081 },
  { value: "SO2", label: "Сернистый газ (SO2)", molarMass: 0.064 },
  { value: "SO3", label: "Сернистый ангидрид (SO3)", molarMass: 0.080 },
  { value: "H2S", label: "Сероводород (H2S)", molarMass: 0.034 },
  { value: "PH3", label: "Фосфористый водород (PH3)", molarMass: 0.034 },
  { value: "CF3Cl", label: "Фреон 11 (CF3Cl)", molarMass: 0.137 },
  { value: "CF2Cl2", label: "Фреон-12 (CF2Cl2)", molarMass: 0.121 },
  { value: "CFCl3", label: "Фреон-13 (CFCl3)", molarMass: 0.115 },
  { value: "F2", label: "Фтор (F2)", molarMass: 0.0380 },
  { value: "SiF4", label: "Фтористый кремний (SiF4)", molarMass: 0.104 },
  { value: "CH3F", label: "Фтористый метил (CH3F)", molarMass: 0.034 },
  { value: "Cl2", label: "Хлор (Cl2)", molarMass: 0.071 },
  { value: "HCl", label: "Хлористый водород (HCl)", molarMass: 0.037 },
  { value: "CH3Cl", label: "Хлористый метил (CH3Cl)", molarMass: 0.051 },
  { value: "CHCl3", label: "Хлороформ (CHCl3)", molarMass: 0.119 },
  { value: "C2N2", label: "Циан (C2N2)", molarMass: 0.052 },
  { value: "HCN", label: "Цианистая кислота (HCN)", molarMass: 0.027 },
  { value: "C2H6", label: "Этан (C2H6)", molarMass: 0.030 },
  { value: "C2H7N", label: "Этиламин (C2H7N)", molarMass: 0.045 },
  { value: "C2H4", label: "Этилен (C2H4)", molarMass: 0.028 },
  { value: "C2H6O", label: "Этиловый спирт (C2H6O)", molarMass: 0.046 },
  { value: "C2H5Cl", label: "Хлористый этил (C2H5Cl)", molarMass: 0.064 },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "100%",
    border: "2px solid rgb(96, 203, 214)",
    borderRadius: "8px",
    boxShadow: "none",
    "&:hover": {
      border: "2px solid rgb(96, 203, 214)",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "rgb(96, 203, 214)" : "white",
    color: state.isSelected ? "white" : "#121212",
    "&:hover": {
      backgroundColor: "rgba(96, 203, 214, 0.2)",
    },
  }),

};
export default function Inputs({changeInputs}) {
  const [inputs, setinputs] = useState({M: 0.028, T: 300})
  const [selectedOption, setSelectedOption] = useState(options[1]);
  changeInputs(inputs, selectedOption.label)
  const handleChange = (selected) => {
    if (selected.molarMass !== 0){
      inputs.M = selected.molarMass
    }
    setinputs(inputs)
    changeInputs(inputs, selected.label)
    setSelectedOption(selected);
  };
  function handleChangeInp(o, g){
    setinputs(o)
    changeInputs(o, g.label)
  }
  return(
  <><div style={{display: "flex", alignItems:"center", marginBottom: "20px", width: "100%"}}>
    <span>Газ:</span>
    <Select
      className="gase-selector"
      style={{width: "100%"}}
      options={options}
      value={selectedOption}
      onChange={handleChange}
      isMulti ={false}
      styles={customStyles} // Кастомизация стилей
      isSearchable // Включить поиск
      placeholder="Выберите газ..."
    />
  </div>
    <InputInText
      textStart={"Молярная масса"}
      textEnd={"кг/моль"}
      inputHandler={(v)=>handleChangeInp({M: v.target.value, T: inputs.T}, selectedOption)}
      inputs={inputs}
      type={"M"}
      step={0.001}
    />
    <InputInText
      textStart={"Температура"}
      textEnd={"К"}
      inputHandler={(v)=>handleChangeInp({M: inputs.M, T: v.target.value}, selectedOption)}
      inputs={inputs}
      type={"T"}
    />
  </>
)}