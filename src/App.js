import './App.css';
import Listings_Protected from './components/Listings';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Listings_Protected />

    </div>
  );
}

export default App;
