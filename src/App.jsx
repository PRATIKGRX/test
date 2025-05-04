import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DrawText from './components/Loader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <DrawText />
      ) : (
        <>
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
