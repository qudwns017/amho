import React, { useEffect, useState } from "react";
import Login from "../Login/Login";

const { kakao } = window;

function LandingPage() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
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
      <div
        id="contents"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Login />
      </div>
    </div>
  );
}

export default LandingPage;
