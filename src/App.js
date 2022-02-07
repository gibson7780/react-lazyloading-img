import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [maxCounts, setMaxCounts] = useState(30);
  const [items, setItems] = useState(Array(maxCounts).fill(0));

  useEffect(() => {}, []);

  useEffect(() => {
    const app = document.querySelector('.app');
    const loadingObserver = document.querySelector('.observer');
    let options = { root: app, rootMargin: '0px 0px 200px 0px' };
    let callback = ([entry]) => {
      if (entry && entry.isIntersecting) {
        console.log('entry', entry);
        setMaxCounts((prevCounts) => prevCounts + 30);
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(loadingObserver);
  }, []);
  useEffect(() => {
    if (maxCounts <= 30) return;
    setItems(Array(maxCounts).fill(0));
  }, [maxCounts]);
  return (
    <div className="App">
      {items.map((item, index) => (
        <div className="box" key={index}>
          {index}
        </div>
      ))}
      <div className="observer"></div>
    </div>
  );
}

export default App;
