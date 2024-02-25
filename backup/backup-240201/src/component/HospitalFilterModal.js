import { useState } from "react";
import Button from "./Button";
import FilterCheckBox from "../component/FilterCheckBox";

const HospitalFilterModal = ({ checkValueHandle }) => {
    const [viewModal, setViewModal] = useState(true);
    const handleViewModal = () => {
        setViewModal(!viewModal);
    }
  
    const [dog, setDog] = useState(false);
    const [cat, setCat] = useState(false);
    const [hamster, setHamster] = useState(false);
    const [hadgehog, setHadgehog] = useState(false);
    const [guineaPig, setGuineaPig] = useState(false);
    const [turtle, setTurtle] = useState(false);
    const [ferret, setFerret] = useState(false);
    const [birds, setBirds] = useState(false);
    const [specialAni, setSpecialAni] = useState(false);
    const checkboxHandle = (id, checked) => {
        checkValueHandle(id, checked)
    }
    const changeDog = () => {
        setDog(!dog)
    }
    const changeCat = () => {
        setCat(!cat)
    }
    const changeHamster = () => {
        setHamster(!hamster)
    }
    const changeHadgehog = () => {
        setHadgehog(!hadgehog)
    }
    const changeGuineaPig = () => {
        setGuineaPig(!guineaPig)
    }
    const changeTurtle = () => {
        setTurtle(!turtle)
    }
    const changeFerret = () => {
        setFerret(!ferret)
    }
    const changeBirds = () => {
        setBirds(!birds)
    }
    const changeSpecialAni = () => {
        setSpecialAni(!specialAni)
    }

    if(viewModal === true) {
        return(
            <div className="HospitalFilterModalBtn" onClick={handleViewModal}>
                <span className="material-symbols-outlined">tune</span>
            </div>
        )
    } else {
        return(
            <div className="HospitalFilterModal">
                <div className="modalTop">
                    <span className="material-symbols-outlined closeModalBtn" onClick={handleViewModal}>arrow_back</span>
                    <h3>동물병원 상세검색</h3>
                    <Button btnText={'초기화'} />
                </div>
                <div className="possPet">
                    <h5>진료동물</h5>
                    <div>
                        <FilterCheckBox value={'강아지'} check={dog} 
                        onClick={()=>changeDog()} onChange={checkboxHandle} />
                        <FilterCheckBox value={'고양이'} check={cat} onClick={()=>changeCat()}onChange={checkboxHandle} />
                        <FilterCheckBox value={'햄스터'} check={hamster} onClick={()=>changeHamster()} onChange={checkboxHandle} />
                        <FilterCheckBox value={'고슴도치'} check={hadgehog} onClick={()=>changeHadgehog()} onChange={checkboxHandle} />
                        <FilterCheckBox value={'기니피그'} check={guineaPig} onClick={()=>changeGuineaPig()} onChange={checkboxHandle} />
                        <FilterCheckBox value={'거북이'} check={turtle}  onClick={()=>changeTurtle()} onChange={checkboxHandle} />
                        <FilterCheckBox value={'페럿'} check={ferret}  onClick={()=>changeFerret()} onChange={checkboxHandle} />
                        <FilterCheckBox value={'조류'} check={birds}  onClick={()=>changeBirds()} onChange={checkboxHandle} />
                        <FilterCheckBox value={'특수동물'} check={specialAni} onClick={()=>changeSpecialAni()}  onChange={checkboxHandle} />
                    </div>
                </div>
                <Button btnText={'필터 적용'} />
            </div>
        )
    }
}

export default HospitalFilterModal;