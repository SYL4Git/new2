import Button from "../component/Button";
import ReservDummy from "../util/ReservDummy";
import "../css/ReservationPage.css";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";

const ReservationPage = () => {
  const reservData = ReservDummy;
  const navigate = useNavigate();

  return (
    <div className="Reserv">
      <Header
        leftChild={
          <Button
            btnText={"내 반려동물"}
            btnClick={() => {
              navigate("/mypage/petpage");
            }}
          />
        }
        rightChild={
          <Button
            btnText={"예약내역"}
            btnClick={() => {
              navigate("/mypage/reservationpage");
            }}
          />
        }
      />

      <h1>예약페이지</h1>
      {reservData.map((itm) => (
        <ul className="reservWrap" key={itm.id} {...itm}>
          <li className="reservList ">
            <div className="photo">
              <p>
                <img src={itm.reservPhoto} alt="reservPetPhoto" />
              </p>
            </div>
            <p>방문: {itm.visit}</p>
            <p>방문 예정 동물: {itm.reservPet}</p>
            <p>예약날짜: {itm.reservDate}</p>
            <p>예약시간: {itm.reservTime}</p>
            <p>병원이름: {itm.reservHos}</p>
            <p>방문목적: {itm.reservFor}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default ReservationPage;
