import { useEffect } from 'react';
import { useState } from 'react';
import background from './assets/Background.mp4'

function App() {
  const [active, setActive] = useState(false);
  useEffect(() => setActive(true), []);
  return (
    <div className="background">
      <div className="filter" />
      <video
        muted
        loop
        autoPlay
        className={active ? 'active' : ''}
      >
        <source src={background} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
