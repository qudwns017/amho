import React, { useEffect } from "react";
import Login from "../Login/Login";
import Info from "../Login/Info";

const { kakao } = window;

const authCheck = () => {
  if (getCookie("x_auth") === null) {
    return true;
  } else {
    return false;
  }
};

var getCookie = function (name) {
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
};

function LandingPage() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.712503, 126.889063),
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
    var iwContent = '<div style="padding:5px;">1번 주차공간</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent1 = '<div style="padding:5px;">2번 주차공간</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent2 = '<div style="padding:5px;">3번 주차공간</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
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
  }, []);

  return (
    // 지도
    <div
      id="map"
      style={{
        display: "flex",
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* 로그인 */}
      {/* <div
        id="contents"
        style={{
          width: "100%",
          height: "100%",

        }}
      >
        <Login/>
      </div> */}
      {authCheck() === true ? (
        <div
          id="contents"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Login />
        </div>
      ) : null}

      {authCheck() === false ? (
        <div
          id="contents"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Info />
        </div>
      ) : null}
    </div>
  );
}

export default LandingPage;
