import "../css/Hospital.css"
import { useState, useContext, useEffect } from "react";
import SearchBar from "../component/SearchBar";
import  HospitalCate  from "../component/HospitalCate";
import { HospitalList } from "../App";
import HospitalFilterModal from "../component/HospitalFilterModal";
import Button from "../component/Button";

const Hospital = () => {
    const hospitalList = useContext(HospitalList);
    const [searchHospital, setSearchHospital] = useState(''); //검색바 필터링

    const [isMap, setIsMap] = useState(false); 
    const handleMap = () => {
        setIsMap(!isMap);
    }

    // const animals = ['강아지', '고양이', '햄스터', '고슴도치', '기니피그', '거북이', '페럿', '조류', '특수동물']
    const [selectAnimals, setSelectAnimals] = useState(hospitalList);

    const checkValueHandle = (id, checked) => {
        setSelectAnimals(
        checked === true
        ?selectAnimals.filter((hospital)=>{ 
            hospital.poss_animals.join().includes(`${id}`)
        })
        :selectAnimals)
    }
    
    // 필터링
    const filterSearch =
    searchHospital === '' ? hospitalList : hospitalList.filter((it)=>(it.hos_name.toLowerCase().includes(searchHospital .toLowerCase())))

 

    return(
        <div className="Hospital">
            <SearchBar 
                type="text"
                search={searchHospital}
                setSearch={setSearchHospital}
                searchName={'searchBar'}
            />
            <HospitalCate filterSearch={filterSearch} searchHospital={searchHospital} isMap={isMap}/>
            <HospitalFilterModal checkValueHandle={checkValueHandle} />
            {isMap?(
                <Button btnClick={handleMap} btnText={
                    <div className="mapToggle">
                        <span className="material-symbols-outlined">format_list_bulleted</span>
                        <span>리스트 보기</span>
                    </div>
                } />
            ):(
                <Button btnClick={handleMap} btnText={
                    <div className="mapToggle">
                        <span className="material-symbols-outlined">map</span>
                        <span>지도 보기</span>
                    </div>
                } />
            )}
        </div>
    )
}

export default Hospital;