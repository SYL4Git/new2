import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import React, { useEffect, useState, useReducer, useRef } from 'react';

import Loading from './pages/Loading';
import Home from './pages/Home';
import Hospital from './pages/Hospital';
import Consult from './pages/Consult';
import SearchPage from './pages/SearchPage';
import HospitalInfo from './pages/HospialInfo';
import Reservation from './pages/Reservation';
import PetPage from './pages/PetPage';
import PetDetail from './component/PetDetail';
// import ReservationPage from './pages/ReservationPage';
import BookMark from './pages/BookMark';
import AddPetPage from './pages/AddPetPage';
import EditPetPage from './pages/EditPetPage';
import { hospitalDummy } from './util/dummy';
import BottomMenu from './component/BottomMenu';
import '../src/App.css';
import 'react-calendar/dist/Calendar.css'

const petDummyList = [
    {
        pet_id: 1,
        pet_name: '몽자',
        pet_breed: '푸들',
        pet_sex: '여',
        pet_birth: 1460764800000,
        pet_weight: 4,
        pet_disease: '없음',
        pet_photo: '/img/dog.jpg',
        reservations: [
            {
                reserve_id: 0,
                reserve_date: '2024/01/01',
                reserve_time: '10:00',
                reserve_purpose: '진료',
                symptom: '구토, 노란 눈꼽 등',
                hospital_name: '바로 동물병원',
                hospital_address: '울산광역시 남구 화합로 197 1층 바로동물병원',
                hospital_number: '052 - 250 - 1234'
            },
            {
                reserve_id: 1,
                reserve_date: '2024/01/25',
                reserve_time: '10:00',
                reserve_purpose: '미용',
                symptom: '없음 ',
                hospital_name: '이루아 동물병원',
                hospital_address: '울산광역시 남구 화합로 197 1층 바로동물병원',
                hospital_number: '052 - 250 - 5678'
            }
        ]
    },
    {
        pet_id: 2,
        pet_name: '하쿠',
        pet_breed: '믹스묘',
        pet_sex: '여',
        pet_birth: 1651363200000,
        pet_weight: 3,
        pet_disease: '허피스',
        pet_photo: '/img/cat.jpg',
        reservations: []
    }
]

let newState = petDummyList;
const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            return action.data;
        }
        case 'CREATE': {
            const newItem = {
                ...action.data
            }
            newState = [newItem, ...newState];
            break;
        }
        case 'REMOVE': {
            newState = state.filter((item) => item.pet_id !== action.targetID);
            break;
        }
        case 'EDIT': {
            newState = state.map((item) =>
                item.pet_id === action.data.pet_id ? { ...action.data } : item);
            break;
        }
        case 'RESVERADD': {
            const newItem = {
                ...action.data
            }
            // reservationNow.reserve_id === action.data.reserve_id?
            // reservationNow
            // : reservationNow = [{newItem}, ...reservationNow]

            // newState.reservations = [newItem, ...newState]

            if(newState.pet_id === newItem.pet_id){
                newState.reservations = [...newState.reservations, newItem];
            }
            break;
        }
        default:
            return state;
    }
    return newState;
};

export const HospitalList = React.createContext();
export const AnimalList = React.createContext();
export const AnimalListDispatch = React.createContext();
export const Favorite = React.createContext();

function App() {

    const [loading, setLoading] = useState(true); // 로딩페이지 

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const [data, dispatch] = useReducer(reducer, petDummyList); //반려동물 데이터
    const [hosData, hosdispatch] = useReducer(reducer, hospitalDummy);
    const dataId = useRef(3);
    const reserveId = useRef(2);


    const onCreate = (pet_name, pet_breed, pet_sex, date, pet_weight, pet_disease) => {
        dispatch({
            type: 'CREATE',
            data: {
                pet_id: dataId.current,
                pet_name,
                pet_breed,
                pet_sex,
                pet_birth: new Date(date).getTime(),
                pet_weight,
                pet_disease
            }
        });
        dataId.current += 1;

    };

    const onRemove = (targetID) => {
        dispatch({
            type: 'REMOVE',
            targetID
        });
    }

    const onEdit = (targetID, pet_name,  pet_breed, pet_sex, date, pet_weight, pet_disease) => {
        dispatch({
            type: 'EDIT',
            data: {
                pet_id: targetID,
                pet_name,
                pet_breed,
                pet_sex,
                pet_birth: new Date(date).getTime(),
                pet_weight,
                pet_disease
            }
        });
    }

const onReserveAdd = (date, reserve_time, reserve_purpose, symptom, hospital_id, hospital_name,  hospital_address, hospital_number, pet_id) => {
    dispatch({
        type: 'RESVERADD',
        data: {
            reserve_id: reserveId.current,
            reserve_date: new Date(date).getTime(),
            reserve_time,
            reserve_purpose,
            symptom,
            hospital_id,
            hospital_name,
            hospital_address,
            hospital_number,
            pet_id
        }
    })
    reserveId.current += 1;
}
    const changeFav = (targetID, bookmark) => {
        hosdispatch({
            type: 'EDIT',
            hosData: {
                id: targetID,
                bookmark
            }
        })
    }
    
    const Layout = () => {
        return (
            <div className='wrap'>
                <Outlet />
                <BottomMenu />
            </div>
        )
    }

    return (
        <HospitalList.Provider value={hosData}>
            <AnimalList.Provider value={data}>
                <AnimalListDispatch.Provider value={{ onCreate, onRemove, onEdit, onReserveAdd }}>
                    <Favorite.Provider value={{ changeFav }}>
                        {loading ? (<Loading />) : (
                            <div className="App">
                                <BrowserRouter>
                                    <Routes>
                                        <Route path='/' element={<Layout />}>
                                            <Route index element={<Home />} />
                                            <Route path='/hospital' element={<Hospital />} />
                                            <Route path='/Consult' element={<Consult />} />
                                            <Route path='/bookmark' element={<BookMark />} />
                                            <Route path='/hospitalInfo/:hos_id' element={<HospitalInfo />} />
                                            <Route path='/petpage/' element={<PetPage />} />
                                            {/* <Route path='/reservationpage' element={<ReservationPage />} /> */}
                                            <Route path='/petdetail/:pet_id' element={<PetDetail />} />
                                        </Route>
                                        <Route path='/search' element={<SearchPage />} />
                                        <Route path='/reservation/:hos_id' element={<Reservation />} />
                                        <Route path='/addpets' element={<AddPetPage />} />
                                        <Route path='/editpets/:pet_id' element={<EditPetPage />} />
                                    </Routes>
                                </BrowserRouter>
                            </div>
                        )}
                    </Favorite.Provider>
                </AnimalListDispatch.Provider>
            </AnimalList.Provider>
        </HospitalList.Provider>
    );
}


export default App;
