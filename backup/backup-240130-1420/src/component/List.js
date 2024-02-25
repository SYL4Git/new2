import { useEffect, useState } from "react";


const List = () => {
    const [data, setData] = useState([]); //동물병원 데이터

    useEffect(() => {
        const endpoint = `https://api.odcloud.kr/api/15083129/v1/uddi:a7e606fe-7646-496a-9648-c2b7c291431d_201909201327?page=1&perPage=74&serviceKey=onaJ78H%2FltSEpX%2BAuhp5VySqVzhJmvhXnBMD4wSNLnvr5J3Pd3ut4YQKrlrDAXp7BMzJFhWKc1zkhyStgwudPw%3D%3D`;
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setData(response.data)
            })
    }, [])

    console.log(data)

    return (
        <div className="List">
            <ul>
                {data.map(item => (
                    <li key={item.연번}>
                        {item.위도}
                        {item.경도}
                        {item.구군명}
                        {item.사업장명}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default List;
