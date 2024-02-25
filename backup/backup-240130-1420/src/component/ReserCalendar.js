import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css'; // css import


import '../css/Reservation.css';




const ReserCalendar = () => {
	const [value, onChange] = useState(new Date());


	// const [reserTime, setReserTime] = useState(false);

	// const handleClickDay = () => {
	// 	setReserTime(!reserTime)
	// }

	return (
		<div>
			<Calendar
				onChange={onChange}
				value={value}
				formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
				next2Label={null} // 두 달씩 안넘어가도록
				prev2Label={null}
				minDate={new Date()} // 지난 날짜는 비활성화
				// onClickDay={handleClickDay}
			/>
			<div className="reserDay">
				{moment(value).format("YYYY년 MM월 DD일")}
			</div>
			

		</div>
	);
}

export default ReserCalendar;