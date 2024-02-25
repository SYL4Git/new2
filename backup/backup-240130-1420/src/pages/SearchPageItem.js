import { useNavigate } from 'react-router-dom';
import Button from '../component/Button';
import '../css/SearchPageItem.css';

const SearchPageItem = ({ hos_id, hos_name, address, call, open_hours }) => {

    const navigate = useNavigate();

    return (
        <div className="SearchPageItem">
            <div className='hos_txt'>
                <div className='hos_title'>{hos_name}</div>
                <div className='hos_address'>{address}</div>
                <div className='hos_time'>
                    {open_hours.open_time}~{open_hours.close_time}
                </div>
            </div>
            <div className='btn_wrap'>
                <Button 
                    btnName={'searchPageBtn'}
                    btnText={'전화하기'}
                    btnClick={() => {navigate('/')}}
                />
                <Button 
                   btnName={'searchPageBtn'}
                   btnText={'예약하기'} 
                   btnClick={() => {navigate('/hospitalInfo/:id')}}//hos_id로 변경하면되는지?
                />
            </div>
        </div>
    )
}
export default SearchPageItem;