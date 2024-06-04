import { useState } from 'react'
import './App.css'
import Editor from './Editor'
import RubricEditor from './RubricEditor'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Editor />} />
          <Route path="/rubric-editor" element={<RubricEditor />} />
        </Routes>
      </Router>
  )
}

export default App
