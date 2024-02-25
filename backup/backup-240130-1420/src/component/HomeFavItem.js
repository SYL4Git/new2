// import { HospitalList } from '../../App'

import { useState } from "react";
import "../css/HomeFavItem.css";
import { useNavigate } from "react-router-dom";

const HomeFavItem = ({ hos_id, hos_name, open_hours }) => {
  const navigate = useNavigate();

  // const [isClicked, setIsClicked]=useState(true)

  // const handleClickFav = () => {

  // }

  return (
    <div className="HomeFavItem">
      <div className="favName">
        <h3>{hos_name}</h3>
        <button className="addFav">
          <img src="/img/addFavOn.png" />
        </button>
      </div>
      <div className="favHour">
        <div className="officeHour">
          진료시간: {open_hours.open_time} ~ {open_hours.close_time}
        </div>
        <div className="lunchTime">
          점심시간: {open_hours.lunch_start} ~ {open_hours.lunch_end}
        </div>
      </div>
      <div className="favBtns">
        <button className="btnReserv"
          onClick={()=>{navigate(`/reservation/${hos_id}`)}}
        >
          예약하기
        </button>
        <button className="btnCall">
          <img src={`/img/call.png`} alt="callBtn" />
        </button>
      </div>
    </div>
  );
};
export default HomeFavItem;
