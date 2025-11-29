import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import JokerSpinner from './components/JokerSpinner'
import ResolutionSelector from './components/ResolutionSelector'
import './App.css'

function App() {
  const [currentMode, setCurrentMode] = useState('spinner') // 'spinner' or 'resolution'
  const [is4kFullscreen, setIs4kFullscreen] = useState(false)

  return (
    <>
      {is4kFullscreen && (
        <div className="fullscreen-black" onClick={() => setIs4kFullscreen(false)}></div>
      )}
      
      <div className="app-container">
        
        <div className="mode-switcher">
          <button 
            className={currentMode === 'spinner' ? 'active-mode' : ''} 
            onClick={() => setCurrentMode('spinner')}
          >
            Joker Spinner
          </button>
          <button 
            className={currentMode === 'resolution' ? 'active-mode' : ''} 
            onClick={() => setCurrentMode('resolution')}
          >
            Resolution Selector
          </button>
        </div>

        <div className="content-area">
          {currentMode === 'spinner' ? <JokerSpinner /> : <ResolutionSelector setIs4kFullscreen={setIs4kFullscreen} />}
        </div>
      </div>
      
      <Analytics />
    </>
  )
}

export default App

