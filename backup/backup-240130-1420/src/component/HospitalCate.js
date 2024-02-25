import { useNavigate } from "react-router-dom";
import Button from "./Button";
import NaverMap from "./NaverMap";
import MapItem from "./MapItem";
import BookMarkStar from "./BookMarkStar";




const HospitalCate = ({filterSearch, isMap}) => {
    const navigate = useNavigate();

    if(isMap === true){
        return(
            <div className="HospitalCateMap">
                <NaverMap filterSearch={filterSearch} />
                {filterSearch.map((hospital) => (
                    <MapItem key={hospital.hos_id} {...hospital}/>
                ))}
            </div>
        )
    } else {
        return(
            <div className="HospitalCate">
                <ul>
                    {filterSearch.map((hospital) => (
                            <li className="EachHospital" key={hospital.hos_id} {...hospital}>
                                <div className="info">
                                    <div className="title_fav">
                                        <p>{hospital.hos_name}</p>
                                        <BookMarkStar hos_id={hospital.hos_id} bookmark={hospital.bookmark} />
                                    </div>
                                    <div className="place">
                                        <p className="far">233km</p>
                                        <span>|</span>
                                        <p className="address">{hospital.address}</p>
                                    </div>
                                    <div className="time">
                                        <div className="noti">
    
                                        </div>
                                        <p>
                                            {hospital.open_hours.open_time}
                                            ~
                                            {hospital.open_hours.close_time}
                                        </p>
                                    </div>
                                    <p className="call_num">
                                        <span className="material-symbols-outlined">call</span>
                                        {hospital.call}
                                    </p>
                                    <div className="btn">
                                        <Button btnText={'전화하기'}/>
                                        <Button btnText={'예약하기'}  btnClick={()=>{navigate(`/hospitalInfo/${hospital.hos_id}`)}}/>
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

export default HospitalCate;