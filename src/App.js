import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import DataBiding from './DataBiding.js/DataBiding';
import StyleComponent from './StyleComponent.js/StyleComponent';


function App() {
  return (
    //muốn hiện nhìu nd phải để trong cặp thẻ div
    <div className="App">
      {/* <h1>Welcome to React</h1> */}
      {/* sử dụng component */}
      {/* <FunctionComponent/>
      <FunctionComponent/>
      <ClassComponent/> */}

      <HomeComponent/>
      <DataBiding/>
      <StyleComponent/>

    </div>
  );
}

export default App;
