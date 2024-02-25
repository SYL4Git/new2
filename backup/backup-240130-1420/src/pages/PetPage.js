import React, { useContext, useEffect, useState } from "react";
import { AnimalList } from "../App";
import { useNavigate, useParams } from "react-router-dom";

import "../css/PetPage.css";
//MyReservation.css 추가 및 연결
import "../css/MyReservation.css"; 
import Button from "../component/Button";
import Header from "../component/Header";
import PetDetail from "../component/PetDetail";

const PetPage = () => {
  const { pet_id } = useParams();
  const navigate = useNavigate();
  const petDummy = useContext(AnimalList);

  const [choosePet, setChoosePet] = useState(1);
  const [isMyPet, setIsMyPet] = useState(true);
  const changePage = () => {
    setIsMyPet(!isMyPet);
  };

  const clickPet = (id) => {
    setChoosePet(id);
  };

  const filterPetDummy =
    choosePet === 1
      ? petDummy.filter((pet) => pet.pet_id === 1)
      : petDummy.filter((pet) => pet.pet_id === choosePet);

  if (isMyPet === true) {
    return (
      <div className="PetPage">
        <Header
          leftChild={<Button btnText={"내 반려동물"} />}
          rightChild={
            <Button
              btnText={"예약내역"}
              btnClick={() => {
                changePage();
              }}
            />
          }
        />
        <h1>반려동물 페이지</h1>
        <ul className="PetSelectWrap">
          {petDummy &&
            petDummy.map((btn) => (
              <Button
                btnImg={btn.pet_photo}
                btnClick={() => clickPet(btn.pet_id)}
                key={btn.pet_id}
                {...btn}
                btnName={`petImg ${btn.pet_id}`}
              />
            ))}
          <Button
            btnName={"addPets"}
            btnClick={() => navigate("/addpets")}
            btnText={<span className="material-symbols-outlined">add</span>}
          />
        </ul>
        <div className="PetDetailBorder">
          {filterPetDummy.map((pet) => (
            <PetDetail key={pet.pet_id} {...pet} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="MyReservation">
        <Header
          leftChild={
            <Button
              btnText={"내 반려동물"}
              btnClick={() => {
                changePage();
              }}
            />
          }
          rightChild={<Button btnText={"예약내역"} />}
        />
        <h1>예약페이지</h1>
        <ul>
          {petDummy
            .filter((animal) => !!animal.reservations?.length > 0)
            .map((animal) =>
              animal.reservations.map((reservation) => (
                <li
                  key={animal.pet_id}
                  {...animal.reservations}
                  className="eachReservation"
                >
                  <div key={reservation.reserve_id} {...reservation}>
                    <div className="reserveBtns">
                      <p>방문예정</p>
                      <Button btnText={"예약취소하기"} />
                    </div>
                    <div className="reserveDate">
                      <p>{reservation.reserve_date}</p>
                      <p>{reservation.reserve_time}</p>
                    </div>
                    <p>병원이름: {reservation.hospital_name}</p>
                    <p>방문목적: {reservation.reserve_purpose}</p>
                    <p>증상: {reservation.symptom}</p>
                  </div>
                  <div className="photo">
                    <p>
                      <img src={animal.pet_photo} alt="reservPetPhoto" />
                    </p>
                    <p>{animal.pet_name}</p>
                  </div>
                </li>
              ))
            )}
          {/* {petDummy.reservations && petDummy.reservations.map((reservation) => (
                        <li className="eachReserve" key={reservation.reserve_id} {...reservation}>
                            <div className="reservebtns">
                                <p>방문예정</p>
                                <Button btnText={'예약취소하기'} />
                            </div>
                            <div className="reservedate">
                                <p>{reservation.reserve_date}</p>
                                <p>{reservation.reserve_time}</p>
                            </div>
                            <p>병원이름: {reservation.hospital_name}</p>
                            <p>방문목적: {reservation.reserve_purpose}</p>
                            <p>증상: {reservation.symptom}</p>
                            <div className="photo">
                                <p>
                                    <img src={reservation.reservPhoto} alt="reservPetPhoto" />
                                </p>
                                <p>{reservation}</p>
                            </div>
                        </li>
                    ))} */}
        </ul>
      </div>
    );
  }
};
export default PetPage;
