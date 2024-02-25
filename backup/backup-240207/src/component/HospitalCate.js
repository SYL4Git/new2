import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Button from "./Button";
import NaverMap from "./NaverMap";
import MapItem from "./MapItem";
import BookMarkStar from "./BookMarkStar";

const HospitalCate = ({ filterSearch, isMap }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("filterSearch changed:", filterSearch);
  }, [filterSearch]);

  if (isMap === true) {
    return (
      <div className="HospitalCateMap">
        <NaverMap filterSearch={filterSearch} />
        {filterSearch.map((hospital) => (
          <MapItem key={hospital.hos_id} {...hospital} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="HospitalCate">
        <ul>
          {filterSearch &&
            filterSearch.map((hospital) => (
              <li className="EachHospital" key={hospital.hos_id}>
                <div className="info">
                  <div className="title_fav">
                    <p>{hospital.hos_name}</p>
                    <BookMarkStar
                      id={hospital.hos_id}
                      book={hospital.bookmark}
                    />
                  </div>
                  <div className="place">
                    <p className="far">233km</p>
                    <span>|</span>
                    <p className="address">{hospital.address}</p>
                  </div>
                  <div className="time">
                    <div className="noti">영업중</div>
                    {hospital.open_hours ? (
                      <p>
                        {hospital.open_hours.open_time}~
                        {hospital.open_hours.close_time}
                      </p>
                    ) : (
                      <p>영업 시간 정보가 없습니다.</p>
                    )}
                  </div>
                  <p className="call_num">
                    <span className="material-symbols-outlined">call</span>
                    {hospital.call}
                  </p>
                  <div className="btn">
                    <Button btnText={"전화하기"} />
                    <Button
                      btnText={"예약하기"}
                      btnClick={() => {
                        navigate(`/hospitalInfo/${hospital.hos_id}`);
                      }}
                    />
                  </div>
                </div>
                <div className="photo">
                  <img src={hospital.hos_photo} alt="hospital_photo" />
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
};
const MemoizedHospitalCate = React.memo(HospitalCate);
export default MemoizedHospitalCate;
