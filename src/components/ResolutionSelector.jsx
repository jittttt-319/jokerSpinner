import { useState } from 'react';
import './ResolutionSelector.css';
import jokerImage from '../images/jokerImages.jpeg';

const ResolutionSelector = () => {
  const [resolution, setResolution] = useState('720p');

  const handleChange = (e) => {
    setResolution(e.target.value);
  };

  const renderContent = () => {
    switch (resolution) {
      case '720p':
        return (
          <div className="resolution-placeholder res-720p">
            <img src={jokerImage} alt="720p" className="res-image blur-very-very" />
          </div>
        );
      case '1080p':
        return (
          <div className="resolution-placeholder res-1080p">
            <img src={jokerImage} alt="1080p" className="res-image blur-very" />
          </div>
        );
      case '4k':
        return (
          <div className="resolution-placeholder res-4k">
            {/* 4k is Black Screen */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="resolution-selector-container">
      <h2>能看清你吗</h2>
      <div className="controls">
        <label htmlFor="resolution-dropdown">Select Resolution: </label>
        <select 
          id="resolution-dropdown"
          value={resolution} 
          onChange={handleChange}
          className="resolution-dropdown"
        >
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
          <option value="4k">4k</option>
        </select>
      </div>

      <div className="display-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResolutionSelector;

