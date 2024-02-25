import { useContext, useState } from "react";
import { AnimalList } from "../App";
import { useParams } from "react-router-dom";

import "../css/PetRecord.css";
import Radiobox from "./Radiobox";
import RadioboxGroup from "./RadioboxGroup";

const PetRecord = ({ pet_id, calVlaue, defaultChecked }) => {
  const petDummy = useContext(AnimalList);

  const [radioChange, setRadioChange] = useState([]);

  const [inputChange, setInputChange] = useState('');

  const handleRadioChange=(e)=>{
    setRadioChange(e.target.vaule)
    console.log(radioChange)
  }

  const handleInputChange = (e) => {
    setInputChange(e.target.value);
    console.log(inputChange);
  };

  const handleSave=()=>{

  }

  return (
    <div className="PetRecord">
      <h3>PetRecord</h3>
      <RadioboxGroup className="cough" label={"기침: "}>
        <Radiobox name={"cough1"} value={"1~3"} defaultChecked >
          1~3회
        </Radiobox>
        <Radiobox name={"cough2"} value={"4~6"}>
          4~6회
        </Radiobox>
        <Radiobox name={"cough3"} value={"7more"}>
          7회 이상
        </Radiobox>
      </RadioboxGroup>
      <RadioboxGroup className={"runningNose"} label={"콧물: "}>
        <Radiobox
          name={"runningNose1"}
          value={"transparent"}
          defaultChecked
        >
          투명함
        </Radiobox>
        <Radiobox name={"runningNose2"} value={"yellow"}>
          노란색
        </Radiobox>
        <Radiobox name={"runningNose3"} value={"red"}>
          붉은색
        </Radiobox>
      </RadioboxGroup>
      <RadioboxGroup className={"hunger"} label={"식욕: "}>
        <Radiobox
          name={"hunger1"}
          value={"reduced"}
          defaultChecked>
          감소
        </Radiobox>
        <Radiobox name={"hunger2"} value={"noChange"}>
          보통
        </Radiobox>
        <Radiobox name={"hunger3"} value={"increased"}>
          증가
        </Radiobox>
      </RadioboxGroup>
      <RadioboxGroup className={"urine"} label={"소변: "}>
        <Radiobox name={"urine1"} value={"0~2"} defaultChecked>
          0~2회
        </Radiobox>
        <Radiobox name={"urine2"} value={"3~6"}>
          3~6회
        </Radiobox>
        <Radiobox name={"urine3"} value={"7more"}>
          7회 이상
        </Radiobox>
      </RadioboxGroup>
      <RadioboxGroup className={"excrement"} label={"대변: "}>
        <Radiobox name={"excrement1"} value={"0"} defaultChecked>
          0회
        </Radiobox>
        <Radiobox name={"excrement2"} value={"1~2"}>
          1~2회
        </Radiobox>
        <Radiobox name={"excrement3"} value={"3more"}>
          3회 이상
        </Radiobox>
      </RadioboxGroup>
      <RadioboxGroup className={"temp"} label={"체온: "}>
        <Radiobox name={"temp1"} value={"lower"} defaultChecked>
          평균보다 낮음
        </Radiobox>
        <Radiobox name={"temp2"} value={"normal"}>
          평균
        </Radiobox>
        <Radiobox name={"temp3"} value={"higher"}>
          평균보다 높음
        </Radiobox>
      </RadioboxGroup>
      <RadioboxGroup className={"active"} label={"활동성 : "}>
        <Radiobox name={"active1"} value={"nearNone"} defaultChecked>
          거의 없음
        </Radiobox>
        <Radiobox name={"active2"} value={"little"}>
          약간 있음
        </Radiobox>
        <Radiobox name={"active3"} value={"much"}>
          활발함
        </Radiobox>
      </RadioboxGroup>
      <div className="misc">
        <p>기타: </p>
        <input type="text" onChange={handleInputChange} />
      </div>
      <div className="btnSave">
        <button value={inputChange} onClick={handleSave}>
          기록저장
        </button>
      </div>
    </div>
  );
};
export default PetRecord;
