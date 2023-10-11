import React, { useEffect } from 'react';

// kakao 타입지정
declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    let container = document.querySelector('.kakao-map');

    const options = {
      center: new kakao.maps.LatLng(37.17058840207, 127.112843761156),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return <div id="map" style={{ width: '500px', height: '400px' }}></div>;
};

export default KakaoMap;
