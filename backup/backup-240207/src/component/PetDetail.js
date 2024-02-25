import { useState } from "react";
import { AnimalList } from "../App";
import Calendar from "react-calendar";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import "../css/PetDetail.css";
import PetRecord from "./PetRecord";

const PetDetail = ({
  pet_id,
  pet_birth,
  pet_name,
  pet_breed,
  pet_sex,
  pet_weight,
  pet_disease,
  symptom_id,
  cough,
  runningNose,
  hunger,
  urine,
  excrement,
  temperature,
  active,
  misc,
}) => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());

  // 생일 날짜/입양 날짜

  // 현재 날짜
  const currentDate = new Date();

  // 날짜 계산
  const calculateAge = (birthdate, currentDate) => {
    // diffInMilliseconds=현재 날짜 - 생일 날짜/입양 날짜(밀리세컨드)
    const diffInMilliseconds = currentDate - birthdate;

    const years = Math.floor(
      /* diffInMilliseconds / 365.26(1년의 평균 일수)*24(하루 시간)*60(1시간=60분)*60(1분=60초)*1000(1초=1000밀리세컨드) */
      diffInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
    );

    const remainingTime = diffInMilliseconds % (365.25 * 24 * 60 * 60 * 1000);
    const months = Math.floor(remainingTime / (30.44 * 24 * 60 * 60 * 1000));

    return { years, months };
  };

  // 계산된 날짜를 현재 나이로 설정
  // const age = calculateAge(birthDate, currentDate);

  return (
    <div className="PetDetail">
      <div className="PetDetailBorder">

      <div className="PetDetailIn">
        <div className="petName">
          <h3>{pet_name}</h3>
        </div>
        <div className="type">
          <p>{pet_breed}</p>
          <p>{pet_sex}</p>
        </div>
        <div className="age">
          <p>
            {calculateAge(new Date(pet_birth), currentDate).years}년{" "}
            {calculateAge(new Date(pet_birth), currentDate).months}
            개월
          </p>
          <p>({new Date(pet_birth).toLocaleDateString()})</p>
        </div>
        <div className="weight">
          <h4>{pet_weight}Kg</h4>
        </div>
        <div className="illness">
          <p>
            <span>질병이력: </span>
            {pet_disease}
          </p>
        </div>
      </div>
      <div className="PetDetailEdit">
        <div
          className="goto"
          onClick={() => {
            navigate(`/editpets/${pet_id}`);
          }}
        >
          수정하기
        </div>
        <div>삭제하기</div>
      </div>
      </div>
      <div className="calendarTitle">
        <h3>증상 체크리스트</h3>
      </div>
      <Calendar
        value={value}
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        maxDate={new Date()}
      />
      <div className="CalDate">{moment(value).format("YYYY년 MM월 DD일")}</div>
      <PetRecord
        calVlaue={value}
        pet_id={pet_id}
        symptom_id={symptom_id}
        cough={cough}
        runningNose={runningNose}
        hunger={hunger}
        urine={urine}
        excrement={excrement}
        temperature={temperature}
        active={active}
        misc={misc}
      />
    </div>
  );
};
export default PetDetail;
