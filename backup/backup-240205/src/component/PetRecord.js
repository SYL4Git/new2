import { useContext, useState } from "react";
import { AnimalList, AnimalListDispatch } from "../App";

import "../css/PetRecord.css";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";

const PetRecord = ({
  calValue,
  pet_id,
  symptom_id,
  symptom_date,
  // cough,
  // runningNose,
  // hunger,
  // urine,
  // excrement,
  // temperature,
  // active,
  // misc,
}) => {
  // const petDummy = useContext(AnimalList);
  const { onSymptomAdd } = useContext(AnimalListDispatch);

  const [cough, setCough]=useState('1~3')
  const [runningNose, setRunningNose]=useState('transparent')
  const [hunger, setHunger]=useState('reduced')
  const [urine, setUrine]= useState('0~2')
  const [excrement, setExcrement]=useState('0')
  const [temp, setTemp]= useState('low')
  const [active, setActive]= useState('none')

  const handleOnSymptomAdd = () => {
    window.confirm("증상들을 올바르게 입력하셨습니까?");
    onSymptomAdd(setCough)
    onSymptomAdd(setRunningNose)
    console.log(cough)
    console.log(runningNose)
    console.log(setCough)
    console.log(setRunningNose)
  };

  return (
    <div className="PetRecord">
      <h3>PetRecord</h3>
      <RadioGroup className="cough" label={"기침: "} value={cough} onChange={setCough}>
        <Radio
          name={"cough"}
          value='1~3'
          
        >
          1~3회
        </Radio>
        <Radio
          name={"cough"}
          value={"4~6"}
        >
          4~6회
        </Radio>
        <Radio
          name={"cough"}
          value={"7~"}
        >
          7회 이상
        </Radio>
      </RadioGroup>
      <RadioGroup
        className={"runningNose"}
        label={"콧물: "}
        value={runningNose}
        onChange={setRunningNose}
      >
        <Radio name={"runningNose"} value={"transparent"} >
          투명함
        </Radio>
        <Radio name={"runningNose"} value={"yellow"}>
          노란색
        </Radio>
        <Radio name={"runningNose"} value={"red"}>
          붉은색
        </Radio>
      </RadioGroup>
      <RadioGroup className={"hunger"} label={"식욕: "} value={hunger} onChange={setHunger} >
        <Radio name={"hunger"} value={"reduced"} >
          감소
        </Radio>
        <Radio name={"hunger"} value={"normal"}>
          보통
        </Radio>
        <Radio name={"hunger"} value={"increased"}>
          증가
        </Radio>
      </RadioGroup>
      <RadioGroup className={"urine"} label={"소변: "} value={urine} onChange={setUrine} >
        <Radio name={"urine"} value={"0~2"} >
          0~2회
        </Radio>
        <Radio name={"urine"} value={"3~6"}>
          3~6회
        </Radio>
        <Radio name={"urine"} value={"7~"}>
          7회 이상
        </Radio>
      </RadioGroup>
      <RadioGroup className={"excrement"} label={"대변: "} value={excrement} onChange={setExcrement} >
        <Radio name={"excrement"} value={"0"} >
          0회
        </Radio>
        <Radio name={"excrement"} value={"1~2"}>
          1~2회
        </Radio>
        <Radio name={"excrement"} value={"3more"}>
          3회 이상
        </Radio>
      </RadioGroup>
      <RadioGroup className={"temp"} label={"체온: "} value={temp} onChange={setTemp}>
        <Radio name={"temp"} value={"low"} >
          낮음
        </Radio>
        <Radio name={"temp"} value={"normal"}>
          평균
        </Radio>
        <Radio name={"temp"} value={"high"}>
          높음
        </Radio>
      </RadioGroup>
      <RadioGroup className={"active"} label={"활동성 : "} value={active} onChange={setActive} >
        <Radio name={"active"} value={"none"} >
          거의 없음
        </Radio>
        <Radio name={"active"} value={"little"}>
          약간 있음
        </Radio>
        <Radio name={"active"} value={"much"}>
          활발함
        </Radio>
      </RadioGroup>
      <div className="misc">
        <p>기타: </p>
        <input
          type="text"
          // onChange={handleInputChange}
        />
      </div>
      <div className="btnSave">
        <button
          onClick={() => {
            handleOnSymptomAdd(symptom_id);
          }}
        >
          기록저장
        </button>
      </div>
    </div>
  );
};
export default PetRecord;
