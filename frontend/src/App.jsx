import React from 'react'
import { useState } from 'react'
import Navigation from './components/Navigation'
import CreateQuizPage from './components/CreateQuizPage'
const renderComponent = (fragment)=>{
  switch(fragment){
    case ("createQuiz"):
      return <CreateQuizPage />
  }
}
const App = () => {
  const [fragment, setFragment] = useState("home")
  return (
    <div>
      <Navigation setFragment={setFragment}/>
      {renderComponent(fragment)}
    </div>
    
  )
}

export default App