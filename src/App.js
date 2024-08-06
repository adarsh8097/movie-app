
// import './App.css';
import MovieCard from './Component/MovieCard';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        {/* <h1>This is new page</h1> */}
        {/* <MovieCard/> */}
        <MainRoutes/>
      </div>
    </div>
  );
}

export default App;
