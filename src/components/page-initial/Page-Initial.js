import React, { useState } from "react";
import "./styles.css";
import Stack from "@mui/material/Stack";
import { NumberFormatCustom } from "../number-format/number-format";
import { ControlledOpenSpeedDial } from "../speed-dial/speed-dial";
import { UnstyledButtonCustom } from "../Button/Button";
import { ControllableStates } from "../select/select";
import { getConversao } from "../../service/ApiService";
import { BasicAlerts } from "../BasicAlerts";

export default function PageInitial() {
  const [converter, setConverter] = useState("BRL");
  const [convertido, setConvertido] = useState("USD");

  const [valMultiplicado, setValMultiplicado] = useState(0);

  const [valConverter, setValConverter] = useState(0.000000);
  const [valConvertido, setvalConvertido] = useState();

  async function handleConvert() {
    const resposta = await getConversao(convertido, converter);

    // var keys = Object.keys(resposta.data);
 
    // console.log(keys[0]);
    // const teste = keys[0];
    // console.log()
    

    setvalConvertido(resposta.data[Object.keys(resposta.data)[0]]);
    // setvalConvertido(0.184526);
    

    const valorFinal = valConvertido * parseInt(valConverter);
    return setValMultiplicado(valorFinal);
  }

  return (
    <>
      <div className="section">
        <div className="btt">
          <UnstyledButtonCustom
            className="stack"
            variant="contained"
            onClick={handleConvert}
          >
            Converter
          </UnstyledButtonCustom>
        </div>
        <div className="row">
          <div className="row1">
            <div className="label1">
              <label>Valor</label>
            </div>
            <div className="input">
              <Stack spacing={2} direction="row">
                <NumberFormatCustom
                  className="input2"
                  placeholder="............"
                  value={valConverter}
                  onChange={(e) => setValConverter(e.target.value)}
                />
              </Stack>
            </div>
          </div>
          <div className="row2">
            <div className="label2">
              <label>Converter de </label>
            </div>
            <div className="select2">
              <select
                className="sel2"
                onChange={(e) => setConverter(e.target.value)}
                value={converter}
              >
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="SLL">SLL</option>
              </select>
            </div>
            <br />
            <div className="label3">
              <label>Para </label>
            </div>

            <div className="select1">
              <select
                className="sel1"
                onChange={(e) => setConvertido(e.target.value)}
                value={convertido}
              >
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="SLL">SLL</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="divisor" />
        <div className="resultado">
          <div className="labelRes1">
            <label>Resultado:</label>
          </div>
          <div className="rowRes">
            <div className="rowRes1">
              <div>
                <div className="fontA">
                  <label>Conversão de: {converter}</label>
                </div>
                <div className="fontB">
                  <label>Valor a converter: {valConverter}</label>
                </div>
              </div>
            </div>
            <div className="rowRes2">
              <div>
                <div className="fontA">
                  <label>Para: {convertido}</label>
                </div>
                <div className="fontB">
                  <label>Resultado da conversão: {valMultiplicado}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="speed">
        <ControlledOpenSpeedDial />
      </div>
      <div className="footer">
        <footer>LKORZ Inc ©</footer>
      </div>
    </>
  );
}
