import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosApi, API_KEY } from '../../modules/axios';
import { fetchParkInfo } from '../../modules/reducer/fetchDataReducer';
import Layout from '../../components/Layout';
import { StyledMainPage } from './style';
import { ImageStore } from '../../constants/image';
import Button from '../../components/Button';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// types
type AddressType = Record<string, string>;
interface InfoProps {
  parkInfo: {
    info: AddressType[];
  };
}

const MainPage = () => {
  const info = useSelector((state: InfoProps) => state.parkInfo.info);
  const dispatch = useDispatch();

  const [mapPosition, setPosition] = useState<any>({ lat: 0, lng: 0 });

  // store에 parkList info 값 저장
  const getDataStore = async () => {
    const infoData = await axiosApi.get(`/ParkingOperInfo?serviceKey=${API_KEY}&pageNo=1&numOfRows=20`);
    const infoRes = infoData.data.response.body;
    dispatch(fetchParkInfo(infoRes.items));
    onViewMap(infoRes.items[0].name, infoRes.items[0].latitude, infoRes.items[0].longitude);
  };

  // 지도보기
  const onViewMap = (name: string, latitude: string, longitude: string) => {
    const obj = {
      name: name,
      lat: +latitude,
      lng: +longitude,
    };
    setPosition(obj);
  };

  useEffect(() => {
    getDataStore();
  }, []);

  return (
    <StyledMainPage>
      <Layout>
        <Map center={mapPosition} style={{ width: '100%', height: '320px' }} level={3}>
          <MapMarker position={mapPosition}>
            <div style={{ padding: '3px', color: '#000' }}>{mapPosition.name}</div>
          </MapMarker>
        </Map>
        <p className="title">인천 주차장 현황</p>
        <div className="scroll">
          <table>
            <tbody>
              {info.map((park: any) => (
                <tr className="park-list" key={park.parkID}>
                  <td>
                    <p className="park-name">{park.name}</p>
                    <p>{park.addrDetail}</p>
                    <p>전체 주차 면적 : {park.totalLots}</p>
                  </td>
                  <td>
                    <p>{park.divCode === '1' ? '공영' : '민영'}</p>
                  </td>
                  <td>
                    <Button
                      onClick={() => onViewMap(park.name, park.latitude, park.longitude)}
                      classStyle="park-map-btn"
                      imgUrl={ImageStore.map}
                      alt={'지도보기'}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </StyledMainPage>
  );
};

export default MainPage;
