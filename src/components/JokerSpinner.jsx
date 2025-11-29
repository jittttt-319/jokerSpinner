import { useState, useEffect, useRef } from 'react';
import './JokerSpinner.css';
import jokerImage from '../images/jokerImages.jpeg';

const JokerSpinner = () => {
  const [count, setCount] = useState(0);
  const [showJoker, setShowJoker] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const clickTimerRef = useRef(null);
  const resetTimerRef = useRef(null);

  const handleSpin = () => {
    // Clear both timers when user clicks
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    // Increment count
    const newCount = count + 1;
    setCount(newCount);

    // Wait 2 seconds after last click to determine result
    clickTimerRef.current = setTimeout(() => {
      // Check if odd or even
      const isOdd = newCount % 2 !== 0;
      
      if (isOdd) {
        // Odd number - show joker with spin animation
        setShowJoker(true);
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 1000);

        // After showing image for 5 seconds, reset count to 0 (but keep image)
        resetTimerRef.current = setTimeout(() => {
          setCount(0);
        }, 5000);
      } else {
        // Even number - hide joker
        setShowJoker(false);
        // Reset count to 0 for new round
        setCount(0);
      }
    }, 2000);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="joker-spinner-container">
      <h2>猜猜你是谁</h2>
      <p style={{ visibility: 'hidden' }}>Count: {count}</p>
      <button onClick={handleSpin}>按这里</button>
      
      <div className="image-display">
        {showJoker ? (
          <div className="joker-placeholder">
            <img 
              src={jokerImage} 
              alt="Joker" 
              className={`joker-image ${isSpinning ? 'spinning' : ''}`}
            />
          </div>
        ) : (
          <div className="no-joker-placeholder">
            <p>恭喜你不是小丑</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JokerSpinner;

