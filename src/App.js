import logo from "./logo.svg";
import "./App.css";
import CountryDetails from "./components/countryDetails/CountryDetails";
import CountryMap from "./countryMap/CountryMap";

function App() {
  return (
    <div>
      <CountryMap />
      <CountryDetails />
    </div>
  );
}

export default App;
