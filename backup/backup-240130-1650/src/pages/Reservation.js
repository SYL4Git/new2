import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AnimalList, AnimalListDispatch } from "../App";
import { HospitalList } from "../App";
import ReserConfirm from "../component/ReserConfirm"
import Button from "../component/Button";
import moment from "moment";
import Calendar from "react-calendar";
import '../css/Reservation.css'
import NaverMap from "../component/NaverMap";


const Reservation = () => {
    const hospitalList = useContext(HospitalList);
    const animalList = useContext(AnimalList);
    const navigate = useNavigate();
    let arr = [];
    const { onReserveAdd } =useContext(AnimalListDispatch)
    const { hos_id } = useParams();
    const [reserHos, setReserHos] = useState({}); //선택한 병원 객체 
    const [selectedTime, setSelectedTime] = useState([]); 
    const [animal, setAnimal] = useState(''); // 선택한 반려동물...?아이디값
    const [day, setDay] = useState(new Date()) //방문날짜
    const [time, setTime] = useState([arr]); //방문시간
    const [visit, setVisit] = useState(''); //방문목적 
    const [plus, setPlus] = useState('')
    const [confirmOpen, setConfirmOpen] = useState(false);

    const handleconfirm = () => {
        setConfirmOpen(true);
    }
    const handleClickAnimal = (ani) => {
        setAnimal(ani);
    }
    const handleClickmoment = (e) => {
        setDay(e.target.value)
    }
    const handleclickTime = (tim) => {
        setTime(tim);
    }
    const handleclickFor = (info) => {
        setVisit(info);
 
    }
    const chnageplus = (e) => {
        setPlus(e.target.value);
    }

    const handleReservation = () => {
        onReserveAdd(day, time, visit, plus, reserHos.hos_id, reserHos.hos_name, reserHos.address, reserHos.call, animal.pet_id)
        navigate('/');
    }
 
    useEffect(() => {
        if (hospitalList.length >= 1) {
            const targetHos = hospitalList.find((it) =>
                parseInt(it.hos_id) === parseInt(hos_id)
            );
            if (targetHos) {
                setReserHos(targetHos);
            }
        }
    }, [hos_id, reserHos])
    const reserOpen = parseInt(reserHos.open_hours && reserHos.open_hours.open_time.substring(0, 2));
    const reserClose = parseInt(reserHos.open_hours && reserHos.open_hours.close_time.substring(0, 2));
    for (let i = reserOpen; i <= reserClose; i++) {
        arr.push(`${i}:00`)
    }
    
    // useEffect(() => {
    //    setSelectedTime(arr);
    //     console.log(selectedTime); - 로딩되고 첫 화면에는 콘솔에 배열이 빈 배열로 뜨는데 이유를 모르겠움,,


    // }, [hos_id, reserHos]);
    // console.log(time)
    // console.log(animal)
    // console.log(reserHos)
    // console.log(new Date(day).toLocaleDateString())
    // console.log(plus)

    return (
        <div className="Reservation">
            <div className="ReserWrap">
                <div className="ReserHead">
                    <Button
                        btnText={
                            <div>
                                <p><span className='material-icons-outlined'>arrow_back</span></p>
                            </div>
                        }
                        btnClick={() => { navigate(-1) }}
                    />
                    <h2>예약하기</h2>
                </div>
                <div className="ReserAnimal">
                    {animalList.map((animal) =>
                    (<div key={animal.pet_id} {...animal} >

                        <Button
                            btnText={
                                <div>
                                    <p className="ani_photo"><img src={animal.pet_photo} /></p>
                                    <p>{animal.pet_name}</p>
                                </div>
                            }
                            btnValue={animal.pet_id}
                            btnClick={()=>handleClickAnimal(animal)}           
                        />
                    </div>
                    ))}
                </div>
                <div className="ReserHospital">
                    {reserHos.hos_name}
                </div>
                <div className="ReserCal">
                <div className='ReserCalendar'>
                    <Calendar
                        className={'reservecalendar'}
                        onChange={setDay}
                        value={day}
                        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
                        next2Label={null} // 두 달씩 안넘어가도록
                        prev2Label={null}
                        minDate={new Date()} // 지난 날짜는 비활성화
                        onClickDay={()=>handleClickmoment}
                    />
                    <div className="reserDay">
                        {moment(day).format("YYYY년 MM월 DD일")}
                    </div>
		</div>
                </div>
                <div className="ReserTime">
                    {/* <Button
                        btnText={
                            <div>{selectedTime.map((it) =>
                                <p key={it}{...it}>{it}:00</p>
                            )}</div>
                        }
                        btnClick={handleclickTime}
                    /> */}
                    {arr.map((it)=>
                        <Button key={it}{...it}
                            btnText={it}
                            btnValue={it}
                            btnClick={()=>handleclickTime(it)}
                        />
                    )}
                </div>
                <div className="ReserFor">
                    <h3>어떤 일로 방문 예정입니까?</h3>
                    <div>
                        <Button
                            btnName={'hos_service'}
                            btnText={'진료'}
                            btnClick={()=>{handleclickFor('진료')}}
                        />
                        <Button
                            btnName={'hos_service'}
                            btnText={'접종'}
                            btnClick={()=>{handleclickFor('접종')}}
                        />
                        <Button
                            btnName={'hos_service'}
                            btnText={'호텔'}
                            btnClick={()=>{handleclickFor('호텔')}}
                        />
                        <Button
                            btnName={'hos_service'}
                            btnText={'미용'}
                            btnClick={()=>{handleclickFor('미용')}}
                        />
                    </div>
                    <textarea className="Resertext" placeholder="추가적인 전달사항을 입력해주세요" value={plus} onChange={chnageplus}></textarea>
                </div>
                {confirmOpen && <ReserConfirm setConfirmOpen={setConfirmOpen} handleReservation={handleReservation} day={day} setDay={setDay}/>}
                <Button
                    btnText={ '예약하기' }
                    btnName={'Reserbtn'}
                    btnClick={handleconfirm}
                    />
            </div>
        </div>
    );
};

export default Reservation;

