import { useContext } from 'react';
import { AnimalList } from '../App';
import { useParams } from 'react-router-dom';

// PetRecord.css 추가
import '../css/PetRecord.css';

// pet_id, calValue props 추가
const PetRecord = ({pet_id, calValue}) => {

  // const petDummy = useContext(AnimalList);
  // const { pet_id } = useParams();

  // Find the pet with the matching pet_name
  // const selectedPet = petDummy.find((pet) => pet.pet_id === parseInt(pet_id));

  // if (!selectedPet) {
    // Handle the case where the pet with the specified name is not found
    // return <p>반려동물을 찾을 수 없습니다.</p>;
  // }


  return (
    <div className="PetRecord">
      <h3>PetRecord</h3>
      <div className="cough">
        <p>기침:</p>
        <div className="coughCheck">
          <input className='chck1' type="radio" name="cough"/>
          <p>1~3회</p>
          <input className='chck2' type="radio" name="cough" />
          <p>4~6회</p>
          <input className='chck3' type="radio" name="cough" />
          <p>7회 이상</p>
        </div>
      </div>
      <div className="runningNose">
        <p>콧물:</p>
        <div className="RnCheck">
          <input className='chck1' type="radio" name="runningNose" />
          <p>투명</p>
          <input className='chck2' type="radio" name="runningNose" />
          <p>노란색</p>
          <input className='chck3' type="radio" name="runningNose" />
          <p>붉은색</p>
        </div>
      </div>
      <div className="hunger">
        <p>식욕:</p>
        <div className="hungerCheck">
          <input className='chck1' type="radio" name="hunger" />
          <p>감소</p>
          <input className='chck2' type="radio" name="hunger" />
          <p>보통</p>
          <input className='chck3' type="radio" name="hunger" />
          <p>증가</p>
        </div>
      </div>
      <div className="urination">
      <p>소변 횟수:</p>
        <div className="UrinCheck">
          <input className='chck1' type="radio" name="urine" />
          <p>0~2회</p>
          <input className='chck2' type="radio" name="urine" />
          <p>3~6회</p>
          <input className='chck3' type="radio" name="urine" />
          <p>7회 이상</p>
        </div>
      </div>
      <div className="faeces">
      <p>대변 횟수:</p>
        <div className="faecesCheck">
          <input className='chck1' type="radio" name="faeces" />
          <p>0회</p>
          <input className='chck2' type="radio" name="faeces" />
          <p>1~2회</p>
          <input className='chck3' type="radio" name="faeces" />
          <p>3회 이상</p>
        </div>
      </div>
      <div className="bodyTemp">
      <p>체온:</p>
        <div className="tempCheck">
          <input className='chck1' type="radio" name="temp" />
          <p>평균보다 낮음</p>
          <input className='chck2' type="radio" name="temp"/>
          <p>평균 체온</p>
          <input className='chck3' type="radio" name="temp"/>
          <p>평균보다 높음</p>
        </div>
      </div>
      <div className="activeness">
      <p>활동성:</p>
        <div className="activeCheck">
        <input className='chck1' type="radio" name="active"/>
          <p>거의 없음</p>
          <input className='chck2' type="radio" name="active"/>
          <p>약간 있음</p>
          <input className='chck3' type="radio" name="active"/>
          <p>활발함</p>
        </div>
      </div>
      <div className="misc">
        <p>기타: </p>
        <input type="text" />
      </div>
    </div>
  );
};
export default PetRecord;