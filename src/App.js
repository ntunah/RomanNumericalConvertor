import React, { useState } from "react";
import "./style.css";
import { romanNumeralConvert, roman_to_int } from "./Helpers";

export default function App() {
  const [numeric, setNumeric] = useState("");
  const [romanNumeral, setRomannumeral] = useState();

  function handleChage(e) {
    let input_to_convert = e.target.value;
    if (input_to_convert != "") {
      if (Number(input_to_convert)) {
        setRomannumeral(
          "Roman Numeral is : " + romanNumeralConvert(input_to_convert)
        );
      } else if (roman_to_int(input_to_convert.toUpperCase()) > 1) {
        setRomannumeral(
          "Integer is : " + roman_to_int(input_to_convert.toUpperCase())
        );
      } else {
        setRomannumeral("Invalid input");
      }
    } else {
      setRomannumeral();
    }

    setNumeric(input_to_convert);
  }

  return (
    <div>
      <h1>Numeral Convertor</h1>
      Enter number/roman <input value={numeric} onChange={handleChage} />
      <p> {romanNumeral}</p>
    </div>
  );
}
