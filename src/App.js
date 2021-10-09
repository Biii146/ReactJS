import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import DataBiding from './DataBiding.js/DataBiding';
import StyleComponent from './StyleComponent.js/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithArray from './RenderWithArray/RenderWithArray';
import HomePage from './Props/HomePage';
import BTXemChiTiet from './Props/BTXemChiTiet/BTXemChiTiet';
import CarShop from './Props/CarShop/CarShop';


function App() {
  return (
    //muốn hiện nhìu nd phải để trong cặp thẻ div
    <div className="App">
      {/* <h1>Welcome to React</h1> */}
      {/* sử dụng component */}
      {/* <FunctionComponent/>
      <FunctionComponent/>
      <ClassComponent/> */}

      {/* <HomeComponent/>
      <DataBiding/>
      <StyleComponent/>
      <HandleEvent/> */}
      {/* <StateDemo/> */}
      {/* <ChangeFontSize/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithArray/> */}
      {/* <HomePage/> */}
      {/* <BTXemChiTiet/> */}
      <CarShop/>

    </div>
  );
}

export default App;
