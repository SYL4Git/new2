import { useContext } from "react";
import { HospitalList } from "../App";

const ReserTime = () => {

    const hospitalList = useContext(HospitalList);

    return(
        <div className="ReserTime">
            예약가능시간
        </div>
    );
};
export default ReserTime