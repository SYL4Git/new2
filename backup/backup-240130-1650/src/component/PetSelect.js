import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AnimalList } from "../App";
import { useState } from "react";

import "../css/PetSelect.css";
import Button from "./Button";

const PetSelect = ({ pet_id, pet_photo, setChoosePet }) => {
  const navigate = useNavigate();
  const [petChosen, setPetChosen] = useState()

  const clickBtn = (pet_id) => {
    setChoosePet(pet_id);
    setPetChosen(pet_id);
  };

  // const clickBtn = (cateName) => {
  //   setSelectedCate(cateName);
  //   setCate(cateName);
  // };


  return (
    <li className="PetSelect">
      <Button btnName={petChosen === 'pet_id' ? 'active petBtn' : 'petBtn'} btnImg={pet_photo} btnClick={()=>clickBtn({pet_id})} />
      {/* <button
          onClick={() => clickBtn("all")}
          className={selectedCate === "all" ? "active" : ""}
        > */}

    </li>
  );
};
export default PetSelect;
