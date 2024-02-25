import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AnimalList } from "../App";
import { HospitalList } from "../App";
import Button from "../component/Button";
import moment from "moment";
import ReserCalendar from "../component/ReserCalendar";
import '../css/Reservation.css'

const Reservation = () => {
    const hospitalList = useContext(HospitalList);
    const animalList = useContext(AnimalList);
    const navigate = useNavigate();
    const { hos_id } = useParams();
    const [reserHos, setReserHos] = useState({});
    const [selectedTime, setSelectedTime] = useState([]);
    const [animal, setAnimal] = useState();

    const [btnActive, setBtnActive] = useState('')

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

    const reserOpen = parseInt(reserHos.open_hours && reserHos.open_hours.open_time.substring(0,2));
    const reserClose =  parseInt(reserHos.open_hours && reserHos.open_hours.close_time.substring(0,2));
    let arr = [];
    for (let i = reserOpen; i <= reserClose; i++){
        arr.push(i)
    }
    useEffect(()=>{
        setSelectedTime(arr);
        console.log(selectedTime);
    },[hos_id, reserHos]);

    const handleClickAnimal = (pet) => {
        setAnimal(pet);
    }

    return(
        <div className="Reservation">
            <div className="ReserWrap">
                <div className="ReserHead">
                    <Button 
                        btnText={
                        <div>
                             <p><span className='material-icons-outlined'>arrow_back</span></p>
                             <h2>예약하기</h2>
                        </div>    
                        }
                        btnClick={()=>{navigate(-1)}}
                    />
                </div>
                <div className="ReserAnimal">
                    {animalList.map((animal) =>
                      (<div key={animal.pet_id} {...animal} >
                        <Button
                            btnText={
                                <div>
                                    <p className="ani_photo"><img src={animal.pet_photo}/></p>
                                    <p>{animal.pet_name}</p>    
                                </div> 
                            }
                            btnClick={handleClickAnimal}
                        />            
                      </div>  
                    ))}
                </div>
                <div className="ReserHospital"> 
                    {reserHos.hos_name}
                </div>
                <div className="ReserCal">
                    <ReserCalendar />
		        </div>
                <div className="ReserTime">
                    <Button 
                        btnText={  
                            <div>{selectedTime.map((it)=>
                            <p key={it}{...it}>{it}:00</p>
                            )}</div>
                        }
                    />
                </div>
                <div className="ReserFor">
                    <h3>어떤 일로 방문 예정입니까?</h3>
                    <div>
                        {/* {reserHos.map((it)=>
                            <div key={it.service} {...it}>{it}</div>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;

