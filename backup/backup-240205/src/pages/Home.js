import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../component/SearchBar";
import Button from "../component/Button";
import BottomMenu from "../component/BottomMenu";
import HomeFav from "../component/HomeFav"
import Mypet from "../component/Mypet";
import ReserveCardList from "../component/ReserveCardList";
import '../css/HomeButton.css'



const Home = () => {  
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [cardOpen, setCardOpen] = useState(false);

    const handleCard = () =>{
        setCardOpen(true);
    }

    return(
        <div className="Home">
              <h1 className="logo">Petdoc</h1>
            <SearchBar
                searchName={'searchBar'}
                search={search}
                setSearch={setSearch}
                onClick={() => { navigate('/search') }}
            />
            <div className="homeBtns_wrap">
                <Button
                    btnText={'상담하기'}
                    btnName={'consultBtn'}
                    btnClick={() => { navigate('/consult') }}
                />
                <Button
                    btnText={'가까운병원'}
                    btnName={'nearHospitalBtn'}
                    btnClick={()=>(navigate('/hospital'))}
                />
            </div>
            <div>
                <HomeFav />
            </div>
            <div>
                <Mypet />
            </div>
            {cardOpen && <ReserveCardList setCardOpen={setCardOpen}/>}
            <Button 
                btnName={'checkReserve'} 
                btnClick={(it)=>(handleCard(it))} 
                btnText={
                    <div style={cardOpen? {display:'none'}:{display:'flex'}}>
                        <p>{`예약이 있습니다.`}</p> 
                        <span className="material-symbols-outlined">keyboard_arrow_up</span>
                    </div> 
                } 
            /> 
            <BottomMenu />
        </div>
    );
};

export default Home;