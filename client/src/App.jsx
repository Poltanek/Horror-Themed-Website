import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        {/* Route Configurations */}
        <Routes>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
