import logo from './logo.svg';
import './App.css';
import EightBall from "./EightBall";
import answers from "./answers";
import "./EightBall.css";

function App() {
  return (
    <EightBall answers={answers}/>
  );
}

export default App;
