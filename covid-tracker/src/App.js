import './App.css';
import Country from './Components/CountryStats/Country';
import Header from './Components/Header';
import StateStats from './Components/StatesStats/StateStats';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Country */}
      <Country/>
      {/* States */}
      <StateStats/>
    </div>
  );
}

export default App;
