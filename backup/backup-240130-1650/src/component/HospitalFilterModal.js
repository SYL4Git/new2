import { useRef, useState } from "react";
import Button from "./Button";

const HospitalFilterModal = ({animals}) => {
    const [viewModal, setViewModal] = useState(true);
    const handleViewModal = () => {
        setViewModal(!viewModal);
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
                    <span className="material-symbols-outlined closeModalBtn" onClick=  {handleViewModal}>arrow_back</span>
                    <h3>동물병원 상세검색</h3>
                    <Button btnText={'초기화'} />
                </div>
                <div className="possPet">
                    <h5>진료동물</h5>
                    {animals.map((animal)=>(
                        <div className="checkbox" key={JSON.stringify(animal)}>
                            <input 
                                type="checkbox"
                                value={animal}
                                name={animal}
                                
                            />
                            <label htmlFor={animal}>{animal}</label>
                        </div>
                    ))}
                    <Button btnText={'필터 적용'} />
                </div>
            </div>
        )
    }
    

    
}

export default HospitalFilterModal;