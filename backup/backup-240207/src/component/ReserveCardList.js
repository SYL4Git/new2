import { useContext } from "react";
import Slider from "react-slick";
import "../css/ReserveCard.css";

import { AnimalList } from "../App";
import ReserveCard from "./ReserveCard";
import Button from "./Button";

const ReserveCardList = ({ setCardOpen }) => {
    const animalList = useContext(AnimalList);

    const sliderSetting = {
        arrows: false,
        infinite: false
    }

    return (
        <div className="ReserveCardList">
            <Slider {...sliderSetting}>
                {animalList
                    .filter((animal) => (!!animal.reservations?.length > 0))
                    .map((animal) => (
                        animal.reservations && animal.reservations
                            .map((reservationItem) => (
                                <div key={animal.pet_id} {...animal.reservations} className="reserveItem">
                                    <div className="pet">
                                        <p className="photo"><img src={animal.pet_photo} alt="pet" /></p>
                                        <p className="name">{animal.pet_name}</p>
                                        <p className="pet_info">
                                            {animal.pet_breed}
                                            <span>|</span>
                                            {animal.pet_sex}
                                        </p>
                                    </div>
                                    <ReserveCard key={reservationItem.reserve_id} {...reservationItem} setCardOpen={setCardOpen} />
                                    <div className="button">
                                        <Button
                                            btnText={'전화하기'}
                                            btnName={'call'}
                                        // btnClick={`document.location.href='tel-av:${reservationItem.hospital_number}`}
                                        />
                                        <Button
                                            btnText={'예약취소'}
                                            btnName={'cancel'}
                                        />
                                    </div>
                                </div>
                            ))
                    ))
                }
            </Slider>
        </div>
    );
};

export default ReserveCardList;