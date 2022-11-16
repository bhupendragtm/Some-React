import "./App.css";
import NumberList from "./components/double_array";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const key = numbers.toString();
// console.log(key);

function App() {
  return <NumberList key={numbers.toString()} numbers={numbers} />;
}

export default App;
