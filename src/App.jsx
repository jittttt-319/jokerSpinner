import { useState } from 'react'
import JokerSpinner from './components/JokerSpinner'
import ResolutionSelector from './components/ResolutionSelector'
import './App.css'

function App() {
  const [currentMode, setCurrentMode] = useState('spinner') // 'spinner' or 'resolution'

  return (
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
        {currentMode === 'spinner' ? <JokerSpinner /> : <ResolutionSelector />}
      </div>
    </div>
  )
}

export default App

