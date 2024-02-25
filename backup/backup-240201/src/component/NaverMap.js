import { useEffect, useContext } from "react";

function NaverMap({ filterSearch }) {
    useEffect(() => {
        //기본위치
        const map = new window.naver.maps.Map("map", {
            center: new window.naver.maps.LatLng(35.542, 129.33823),
            zoom: 15,
            scaleControl: false,
            logoControl: false,
            mapDataControl: false,
            zoomControl: true,
            minZoom: 6,
        });

    // 마커 생성
    const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(35.542, 129.33823),
        map: map,
    });

    //정보창
    const contentString = '<div class="info">내 위치</div>';
    const infoWindow = new window.naver.maps.InfoWindow({
        content: contentString,
        // disableAutoPan: true 정보창 완전히 다 보이게되는거 없애기
    });

    // 마커 클릭 시 정보창 열기동작
    window.naver.maps.Event.addListener(marker, "click", function (e) {
         if (infoWindow.getMap()) {
            infoWindow.close();
        } else {
            infoWindow.open(map, marker.getPosition());
        }
    });

    // 지도 클릭 시 정보창 닫기
    window.naver.maps.Event.addListener(map, "click", function (e) {
        infoWindow.close();
    });
    // 다중마커 - 병원리스트
    filterSearch &&
        filterSearch.map((hospital) => {
            const hospitalName = hospital.hos_name;
            const position = new window.naver.maps.LatLng(
                hospital.latitude,
                hospital.longitude
            );
            const marker = new window.naver.maps.Marker({
                map: map,
                position: position,
                title: hospitalName,
            });
            const infoWindow = new window.naver.maps.InfoWindow({
                content: `<div style="width:auto; text-align:center; font-size:75%; padding:10px;"><p>${hospitalName}</p></div>`,
            });
            window.naver.maps.Event.addListener(marker, "click", (e) => {
                if (infoWindow.getMap()) {
                    infoWindow.close();
                } else {
                    infoWindow.open(map, marker);
                }
            });
            window.naver.maps.Event.addListener(map, "click", function (e) {
                infoWindow.close();
            });
            const myDistance = () => {
                const myPosition = new window.naver.maps.LatLng(35.542, 129.33823);
                const hospitalPosition = new window.naver.maps.LatLng(hospital.latitude, hospital.longitude);
                const projection = new window.naver.maps.getProjection();
                const distance = projection.getDistance(myPosition, hospitalPosition);
                return distance;
            }
        });
        // 거리값 도출
        // const resetListHandler = () => {
        //     if (!newMap) return;
        //     const newArray = [...totalDomData].sort((a, b) => {
        //         const currentCenterLatLng = newMap.getCenter(35.542, 129.33823);
        //         const LatLngA = new naver.maps.LatLng(
        //             hospital[a].latitude,
        //             hospital[a].longitude
        //         );
        //         const LatLngB = new naver.maps.LatLng(
        //             hospital[b].latitude,
        //             hospital[b].longitude
        //         );
        //         const projection = newMap.getProjection();
        //         const distanceA = projection.getDistance(currentCenterLatLng, LatLngA);
        //         const distanceB = projection.getDistance(currentCenterLatLng, LatLngB);
    
        //         if (distanceA < distanceB) return -1;
        //         else if (distanceA > distanceB) return 1;
        //         else return 0;
        //     });
        //     setSortedData(newArray);
        // };
        
    }, []);

    
  return (
    <div className="HospitalCateMapWrap">
      <div id="map" style={{ width: "100%", height: "490px" }}></div>
      <div></div>
    </div>
  );
}

export default NaverMap;
