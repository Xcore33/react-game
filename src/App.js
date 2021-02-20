import "./App.css";
import Header from './components/Header/Header';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Fade top>
        <Header />
      </Fade>
    </div>
  );
}

export default App;
