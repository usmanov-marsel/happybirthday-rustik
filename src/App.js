import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const refCanvas = useRef();

  useEffect(() => {
    const canvas = refCanvas.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(40, 0);
    ctx.lineTo(40, 100);
    ctx.lineTo(20, 150);
    ctx.moveTo(40, 100);
    ctx.lineTo(60, 150);
    ctx.moveTo(40, 50);
    ctx.lineTo(15, 25);
    ctx.moveTo(40, 50);
    ctx.lineTo(65, 25);
    ctx.stroke();
  }, []);
  let intervalId = 0;
  return (
    <div className="App">
      <div className='human'>
        <button onClick={(e) => {
          if (intervalId !== 0) {
            return;
          }
          let position = 0;
          intervalId = setInterval(() => {
            position = (position + 1) % 3;
            const canvas = refCanvas.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 200, 200);
            ctx.beginPath();
            ctx.moveTo(40, 0);
            ctx.lineTo(40, 100);
            ctx.lineTo(30 - 10 * position, 150);
            ctx.moveTo(40, 100);
            ctx.lineTo(50 + 10 * position, 150);
            ctx.moveTo(40, 50);
            ctx.lineTo(10, 75 - position * 25);
            ctx.moveTo(40, 50);
            ctx.lineTo(70, 75 - position * 25);
            ctx.stroke();
          }, 150);
          
        }}>
          Отпраздновать!
        </button>
        <img className='head' src='images/photo1.png' alt='фото'>
        </img>
        <canvas ref={refCanvas} width="200" height="200">
        </canvas>
        <img className='gecko' src='images/gecko-dance.gif' alt='фото'>
        </img>
        <button onClick={(e) => {
          clearInterval(intervalId);
          intervalId = 0;
        }}>
          Остановиться!
        </button>
      </div>
    </div>
  );
}

export default App;
