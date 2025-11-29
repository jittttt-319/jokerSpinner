import { useState, useEffect, useRef } from 'react';
import './JokerSpinner.css';
import jokerImage from '../images/jokerImages.jpeg';

const JokerSpinner = () => {
  const [count, setCount] = useState(0);
  const [showJoker, setShowJoker] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [refreshCountdown, setRefreshCountdown] = useState(5);
  const [showRefreshNotice, setShowRefreshNotice] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const clickTimerRef = useRef(null);
  const resetTimerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const refreshIntervalRef = useRef(null);

  const handleSpin = () => {
    // Clear all timers when user clicks
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    // Increment count
    const newCount = count + 1;
    setCount(newCount);

    // Start progress bar animation
    setShowProgress(true);
    setProgress(0);
    
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = 100 / steps;
    let currentProgress = 0;

    progressIntervalRef.current = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressIntervalRef.current);
      }
      setProgress(Math.min(currentProgress, 100));
    }, interval);

    // Wait 2 seconds after last click to determine result
    clickTimerRef.current = setTimeout(() => {
      // Hide progress bar
      setShowProgress(false);
      
      let shouldShowJoker = false;
      
      if (newCount === 1) {
        // 1 click: 60% chance to show joker
        shouldShowJoker = Math.random() < 0.6;
      } else if (newCount === 2) {
        // 2 clicks: never show joker
        shouldShowJoker = false;
      } else {
        // 3+ clicks: 60% chance to show joker
        shouldShowJoker = Math.random() < 0.6;
      }
      
      // Mark that we have a result
      setHasResult(true);
      
      if (shouldShowJoker) {
        // Show joker with spin animation
        setShowJoker(true);
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 1000);
      } else {
        // Hide joker
        setShowJoker(false);
      }

      // Show refresh notice and start countdown for both cases
      setShowRefreshNotice(true);
      setRefreshCountdown(5);
      
      refreshIntervalRef.current = setInterval(() => {
        setRefreshCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(refreshIntervalRef.current);
            setShowRefreshNotice(false);
            return 5;
          }
          return prev - 1;
        });
      }, 1000);

      // After 5 seconds, reset count to 0 (keep joker image if shown)
      resetTimerRef.current = setTimeout(() => {
        setCount(0);
        setHasResult(false);
        clearInterval(refreshIntervalRef.current);
        setShowRefreshNotice(false);
      }, 5000);
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
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="joker-spinner-container">
      <h2>猜猜你是谁</h2>
      <p style={{ visibility: 'hidden' }}>Count: {count}</p>
      <button onClick={handleSpin}>按这里</button>
      
      {showProgress && (
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{Math.floor(progress)}%</div>
        </div>
      )}
      
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
            <p>{hasResult ? '恭喜你不是小丑' : '看这里'}</p>
          </div>
        )}
      </div>
      
      {showRefreshNotice && (
        <div className="refresh-notice">Will refresh in {refreshCountdown} second{refreshCountdown !== 1 ? 's' : ''}...</div>
      )}
    </div>
  );
};

export default JokerSpinner;

