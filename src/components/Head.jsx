import { useState, useEffect, useRef } from 'react';
import '../styles/Head.css';
import { Timer } from 'lucide-react';
import { ProfileCards } from './ProfileCards.jsx';

function Head() {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    milliseconds: '000'
  });

  const frameRef = useRef();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: now.getHours().toString().padStart(2, '0'),
        minutes: now.getMinutes().toString().padStart(2, '0'),
        seconds: now.getSeconds().toString().padStart(2, '0'),
        milliseconds: now.getMilliseconds().toString().padStart(3, '0')
      });
      frameRef.current = requestAnimationFrame(updateTime);
    };

    frameRef.current = requestAnimationFrame(updateTime);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const date = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' });

  return (
    <div className="home-container">
      <div className="high-precision-time">
        <div className="time-display">
          <Timer className="timer-icon" size={12} />
          <span className="time-part hours">{time.hours}</span>
          <span className="colon">:</span>
          <span className="time-part minutes">{time.minutes}</span>
          <span className="colon">:</span>
          <span className="time-part seconds">{time.seconds}</span>
          <span className="milliseconds-dot">.</span>
          <span className="time-part milliseconds">{time.milliseconds}</span>
        </div>
        <div className="date-display">{formatter.format(date)}</div>
      </div>

      <main className="home-main">
        <h1 className="home-headline">
          I&apos;m Sumit, <br />
          <span className="building-wrapper">
            building &nbsp;
            <svg
              className="building-svg"
              viewBox="0 0 550 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10.00 40.00 C 47.00 33.00, 10.00 40.00, 47.00 33.00 C 129.00 27.00, 47.00 33.00, 129.00 27.00 C 163.00 27.00, 129.00 27.00, 163.00 27.00 C 180.00 23.00, 163.00 27.00, 180.00 23.00 C 257.00 22.00, 180.00 23.00, 257.00 22.00 C 357.00 12.00, 257.00 22.00, 357.00 12.00 C 461.00 10.00, 357.00 12.00, 461.00 10.00 C 404.00 20.00, 461.00 10.00, 404.00 20.00 C 342.00 26.00, 404.00 20.00, 342.00 26.00 C 265.00 27.00, 342.00 26.00, 265.00 27.00 C 106.00 53.00, 265.00 27.00, 106.00 53.00 C 33.00 53.00, 106.00 53.00, 33.00 53.00 C 45.00 48.00, 33.00 53.00, 45.00 48.00 C 85.00 42.00, 45.00 48.00, 85.00 42.00 C 483.00 42.00, 85.00 42.00, 483.00 42.00"
                stroke="#baff29"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          products for <br></br> <em className="emphasized-text"> public</em>.
        </h1>
      </main>

      <ProfileCards />
    </div>
  );
}

export default Head;
