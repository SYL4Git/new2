import "../css/Hospital.css";
import { useState, useContext, useEffect, useMemo } from "react";
import SearchBar from "../component/SearchBar";
import HospitalCate from "../component/HospitalCate";
import { HospitalList } from "../App";
import HospitalFilterModal from "../component/HospitalFilterModal";
import Button from "../component/Button";

const Hospital = () => {
    const hospitalList = useContext(HospitalList);
    const [searchHospital, setSearchHospital] = useState(""); //검색바 필터링
    const [isMap, setIsMap] = useState(false);

    const handleMap = () => {
        setIsMap(!isMap);
    };

    const [selectAnimals, setSelectAnimals] = useState(hospitalList);
    const checkValueHandle = (id, checked) => {
        console.log(`Checkbox ${id} is checked: ${checked}`);
        setSelectAnimals((prevAnimals) =>
        checked
        ? prevAnimals.filter((hospital) => {
            return (
              hospital.poss_animals.includes(`${id}`) ||
              hospital.service.join().includes(`${id}`)
            );
        })
        : prevAnimals
    );
};

    const filterSearch = useMemo(() => {
        return searchHospital === ""
        ? selectAnimals
        : selectAnimals.filter((it) =>
            it.hos_name.toLowerCase().includes(searchHospital.toLowerCase())
        );
    }, [selectAnimals, searchHospital]);

    return (
        <div className="Hospital">
            <div className="search">
                <SearchBar
                    type="text"
                    search={searchHospital}
                    setSearch={setSearchHospital}
                    searchName={"searchBar"}
                />
            </div>
            <HospitalCate
                filterSearch={filterSearch}
                searchHospital={searchHospital}
                isMap={isMap}
            />
            <HospitalFilterModal checkValueHandle={checkValueHandle} />
            {isMap ? (
            <Button
                btnClick={handleMap}
                btnText={
                    <div className="mapToggle">
                    <span className="material-symbols-outlined">
                        format_list_bulleted
                    </span>
                    <span>리스트 보기</span>
                    </div>
                }
            />
            ) : (
            <Button
                btnClick={handleMap}
                btnText={
                    <div className="mapToggle">
                    <span className="material-symbols-outlined">map</span>
                    <span>지도 보기</span>
                    </div>
                }
            />
            )}
        </div>
    );
};

export default Hospital;
