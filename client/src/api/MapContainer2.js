import Map from "./Map";

import "./Map.css";

const { kakao } = window;

export default function MapContainer() {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(37.712659, 126.891436),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  // 마커가 표시될 위치입니다
  var markerPosition = new kakao.maps.LatLng(37.712503, 126.889063);
  var markerPosition1 = new kakao.maps.LatLng(37.712659, 126.891436);
  var markerPosition2 = new kakao.maps.LatLng(37.713333, 126.889949);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  var marker1 = new kakao.maps.Marker({
    position: markerPosition1,
  });
  var marker2 = new kakao.maps.Marker({
    position: markerPosition2,
  });

  marker.setMap(map);
  marker1.setMap(map);
  marker2.setMap(map);

  // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
  var iwContent =
      '<div class="box"><ul><li>주차장 이름 : </li><li>주소 :</li><li>시간 당 가격 :</li></ul><a href="/reservation" class="check">예약하기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
  // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
  var iwContent1 =
      '<div class="box"><ul><li><h4>장소 이름 :</h4> <h3>중부대학교</h3></li><li><h4>주소 :</h4> <h3>경기 고양시 덕양구 대자동 1286</h3></li><li><h4>시간 당 가격 :</h4> <h3>1500원</h3></li><li><h4>총 테이블 개수 :</h4> <h3>20</h3></li><li><h4>예약 가능 테이블 :</h4> <h3>5</h3></li></ul><a href="/reservation" class="check">예약하기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
  // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
  var iwContent2 =
      '<div class="box"><ul><li>주차장 이름 :</li><li>주소 :</li><li>시간 당 가격 :</li></ul><a href="/reservation" class="check">예약하기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });
  var infowindow1 = new kakao.maps.InfoWindow({
    content: iwContent1,
    removable: iwRemoveable,
  });
  var infowindow2 = new kakao.maps.InfoWindow({
    content: iwContent2,
    removable: iwRemoveable,
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "click", function () {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);
  });
  kakao.maps.event.addListener(marker1, "click", function () {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow1.open(map, marker1);
  });
  kakao.maps.event.addListener(marker2, "click", function () {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow2.open(map, marker2);
  });
}
