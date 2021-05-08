import "./App.css";
import Counter from "./components/Counter";

function App() {
  const storageKey = "counter";

  const storeCounter = (value: number) => {
    window.localStorage.setItem(storageKey, value.toString());
  };

  const loadCounter = () =>
    parseInt(window.localStorage.getItem(storageKey) ?? "0");

  const onCounterChange = (value: number) => {
    document.title = value.toString();
    storeCounter(value);
  };

  return (
    <div className="App">
      <Counter initial={loadCounter()} onChange={onCounterChange} />
    </div>
  );
}

export default App;
