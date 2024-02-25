import { useContext, useState } from "react";
import { AnimalList } from "../App";
import Calendar from "react-calendar";
import moment, { locale } from "moment";
import { useNavigate, useParams } from "react-router-dom";

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
  symptom_date,
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
  const birthDate = new Date(pet_birth);

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
      <h3>PetDetail</h3>
      <div className="PetDetailIn">
        <div className="petName">
          <p>이름: {pet_name}</p>
        </div>
        <div className="type">
          <p>종: {pet_breed}</p>
          <p>성별: {pet_sex}</p>
        </div>
        <div className="age">
          <p>
            나이: {calculateAge(new Date(pet_birth), currentDate).years}년{" "}
            {calculateAge(new Date(pet_birth), currentDate).months}
            개월
          </p>
          <p>({new Date(pet_birth).toLocaleDateString()})</p>
        </div>
        <div className="weight">
          <p>몸무게: {pet_weight}Kg</p>
        </div>
        <div className="illness">
          <p>과거질병: {pet_disease}</p>
        </div>
      </div>
      <div
        className="goto"
        onClick={() => {
          navigate(`/editpets/${pet_id}`);
        }}
      >
        수정하기
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
