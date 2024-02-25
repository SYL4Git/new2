import PetBirthCalendar from "../component/PetBirthCalendar";
import PetProfileInfo from "../component/PetProfileInfo";
import PetProfile from "../component/PetProfile";
import Button from "../component/Button";
import "../css/EditPets.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimalListDispatch } from "../App";
// const getStringDate = (d) => {
//     return d.toISOString().slice(0, 10);
// }
const Editpets = ({ isEdit, originData }) => {
    const navigate = useNavigate();
    const [petKind, setPetKind] = useState('');
    const [petName, setPetName] = useState('');
    const [petGender, setPetGender] = useState('남');
    const [petDisease, setPetDisease] = useState('');
    const [petWeight, setPetWeight] = useState('');
    const [isMale, setIsMale] = useState(true);
    const [isFemale, setIsFemale] = useState(false);
    const [date, setDate] = useState(new Date());
    const { onCreate, onEdit, onRemove } = useContext(AnimalListDispatch);

    const handlePetKind = (e) => {
        setPetKind(e.target.value);
    };
    const handlePetName = (e) => {
        setPetName(e.target.value);
    };
    const handlePetGender = (btn) => {
        setPetGender(btn);
    };
    const handlePetWeight = (e) => {
        setPetWeight(e.target.value);
    };
    const handlePetDisease = (e) => {
        setPetDisease(e.target.value);
    };

    useEffect(() => {
        if (petGender === '남') {
            setIsMale(true)
            setIsFemale(false)
        } else {
            setIsMale(false)
            setIsFemale(true)
        };
    }, [petGender]);

    const handleSubmit = () => {
        if (window.confirm(isEdit ? '반려동물을 수정하시겠습니까?' : '반려동물을 추가하시겠습니까?')) {
            if (!isEdit) {
                if (petKind.length === 0) {
                    alert('종을 입력해주세요.');
                    return;
                } else if (petName.length === 0) {
                    alert('이름을 입력해주세요.');
                    return;
                } else if (petWeight.length === 0) {
                    alert('몸무게를 입력해주세요.');
                    return;
                };
                alert("등록되었습니다.");
                onCreate(petName, petKind, petGender, date, petWeight, petDisease);
            } else {
                if (petKind.length === 0) {
                    alert('종을 입력해주세요.');
                    return;
                } else if (petName.length === 0) {
                    alert('이름을 입력해주세요.');
                    return;
                } else if (petWeight.length === 0) {
                    alert('몸무게를 입력해주세요.');
                    return;
                };
                alert("등록되었습니다.");
                onEdit(originData.pet_id, petName, petKind, petGender, date, petWeight, petDisease);
            }
        }
        navigate('/PetPage');
    }

    const handleDelete = (id) => {
        window.confirm('삭제하시면 복구할 수 없습니다. 정말 삭제하시겠습니까?')
            onRemove(id);
            navigate('/petpage');
    }

    useEffect(() => {
        if (isEdit) {
            // setDate(getStringDate(new Date(parseInt(originData.date))))
            setPetKind(originData.pet_breed)
            setPetName(originData.pet_name)
            setPetGender(originData.pet_sex)
            setPetDisease(originData.pet_disease)
            setPetWeight(originData.pet_weight)
        }
    }, [originData]);
    return (
        <div className="EditPets">
            <Button btnText={<span className="material-symbols-outlined back_icon">arrow_back</span>} btnClick={() => { navigate(-1) }} />
            <PetProfile
                petKind={petKind}
                petName={petName}
                handlePetKind={handlePetKind}
                handlePetName={handlePetName}
            />
            <PetBirthCalendar
                petName={petName}
                date={date}
                setDate={setDate}
            />
            <PetProfileInfo
                isMale={isMale}
                isFemale={isFemale}
                petDisease={petDisease}
                petWeight={petWeight}
                handlePetGender={handlePetGender}
                handlePetDisease={handlePetDisease}
                handlePetWeight={handlePetWeight}
            />
            <Button
                btnClick={handleSubmit}
                btnText={isEdit ? '' : '등록하기'}
                btnName={isEdit ? 'noBtn' : 'addBtn btns'}
            />
            <div className="editBtns">
                <Button
                    btnClick={handleSubmit}
                    btnText={isEdit ? '수정하기' : ''}
                    btnName={isEdit ? 'editBtn btns' : ''}
                />
                <Button
                    btnClick={() => {handleDelete(originData.pet_id)}}
                    btnText={isEdit ? '삭제하기' : ''}
                    btnName={isEdit ? 'editBtn btns' : ''}
                />
            </div>
        </div>
    );
}
export default Editpets; 