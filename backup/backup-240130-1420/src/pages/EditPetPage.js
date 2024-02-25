import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AnimalList } from "../App";
import EditPets from "../component/EditPets";

const EditPetPage = () => {
  const navigate = useNavigate();
  const { pet_id } = useParams();
  const animalList = useContext(AnimalList);

  const [originData, setOriginData] = useState();

  useEffect(() => {
    if (animalList.length >= 1) {
      const targetAnimal = animalList.find(
        (it) => parseInt(it.pet_id) === parseInt(pet_id)
      );
      if (targetAnimal) {
        setOriginData(targetAnimal);
      } else {
        alert("없는 자료입니다.");
        navigate("/");
      }
    }
  }, [pet_id, animalList]);
  console.log(originData);
  return (
    <div className="EditPetPage">
      {originData && <EditPets isEdit={true} originData={originData} />}
    </div>
  );
};

export default EditPetPage;
