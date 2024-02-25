import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import "../css/PetDetail.css";
import PetRecord from "./PetRecord";
import PetRecordItem from "./PetRecordItem";

const PetDetail = ({
    pet_id,
    pet_birth,
    pet_name,
    pet_breed,
    pet_sex,
    pet_weight,
    pet_disease,
    pet_symptoms
}) => {
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const [isSymptom, setIsSymptom] = useState();
    const [isChange, setIsChange] = useState(false); // 화면 전환용 상태변수 였으나 일단 안씀
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


    const handleCalendar = (value) => {
        const morning = new Date(value);
        morning.setHours(0, 0, 0, 0);
        const afternoon = new Date(value);
        afternoon.setHours(23, 59, 59, 999);
        console.log(value)

        const filterDate = pet_symptoms.filter((item) =>
        morning <= new Date(item.symptom_date) && new Date(item.symptom_date) <= afternoon)
        
        setIsSymptom(filterDate);
        console.log(filterDate)
    };
    
        // const targetDay = new Date(value); morning.setHours(0, 0, 0, 0);

        // if (pet_symptoms.length >= 1) {
        //     const targetSymptom = pet_symptoms.find((it) =>
        //         moment(it.symptom_date).format('YYYY/MM/DD'));

        //     const checkdatd = pet_symptoms.filter((it) => moment(it.symptom_date).format('YYYY/MM/DD'));
        //     // console.log(checkdatd[0].symptom_date
        //     //     ,"필터날짜")
        //     // console.log(targetDay,"달력날짜")
        //     if (checkdatd.symptom_date === filterDate) {
        //         console.log('Symptom found:', targetSymptom);
        //         setIsSymptom(targetSymptom);
        //         setIsChange(true);
        //     } else {
        //         console.log('No symptom found for the selected date');
        //         setIsSymptom(null);
        //         setIsChange(false);
        //     }
        // }
    

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
                onChange={setIsSymptom}
                onClickDay={() => { handleCalendar(value) }}
                formatDay={(locale, date) => moment(date).format("DD")}
                maxDate={new Date()}
            />
            <div className="CalDate">{moment(value).format("YYYY년 MM월 DD일")}</div>
            
            {isChange === true ? (
                <>

                    {isSymptom.cough}
                </>
            ) : (
                <>
                    <PetRecord
                        calValue={value}
                        pet_id={pet_id}
                    />
                </>
            )}


        </div>
    );
};
export default PetDetail;
