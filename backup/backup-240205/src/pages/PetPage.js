import React, { useContext, useState } from "react";
import { AnimalList } from "../App";
import { useNavigate } from "react-router-dom";
import { AnimalListDispatch } from "../App";

import "../css/PetPage.css";
import Button from "../component/Button";
import Header from "../component/Header";
import PetDetail from "../component/PetDetail";
import Reservation from "./Reservation";

const PetPage = () => {
  const navigate = useNavigate();
  const petDummy = useContext(AnimalList);
  const { onReserveRemove } = useContext(AnimalListDispatch);
  const [choosePet, setChoosePet] = useState(1);
  const [isMyPet, setIsMyPet] = useState(true);
  const changePage = () => {
    setIsMyPet(!isMyPet);
  };

  const clickPet = (id) => {
    setChoosePet(id);
  };

  const handleReserDelete = (reservationId) => {
    window.confirm("예약을 삭제하시겠습니까?");
    onReserveRemove(reservationId);
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
          {petDummy.map((btn) => (
            <Button
              btnImg={btn.pet_photo}
              btnClick={() => clickPet(btn.pet_id)}
              key={btn.pet_id}
              btnName={`petImg ${btn.pet_id}`}
            />
          ))}
          <Button
            btnName={"addPets"}
            btnClick={() => navigate("/addpets")}
            btnText={<span className="material-symbols-outlined">add</span>}
          />
        </ul>
        <div>
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
                <li key={reservation.reserve_id} className="eachReservation">
                  <div>
                    <div className="reservebtns">
                      <p>방문예정</p>
                      <Button
                        btnText={"예약취소하기"}
                        btnClick={() => {
                          handleReserDelete(reservation.reserve_id);
                        }}
                      />
                    </div>
                    <div className="reservedate">
                      <p>{reservation.reserve_date}</p>
                      <p>{reservation.reserve_time}</p>
                    </div>
                    <p>병원이름: {reservation.hospital_name}</p>
                    <p>방문목적: {reservation.reserve_purpose}</p>
                    <p>증상: {reservation.symptom}</p>
                  </div>
                  <div className="photo" key={animal.pet_id}>
                    <p>
                      <img src={animal.pet_photo} alt="reservPetPhoto" />
                    </p>
                    <p>{animal.pet_name}</p>
                  </div>
                </li>
              ))
            )}
        </ul>
      </div>
    );
  }
};
export default PetPage;
