import './App.css'
import DocumentTitleCounter from './DocumentTitleCounter'
import EditableProfile from './EditableProfile'
import KeyboardSearch from './KeyboardSearch'
import ScoreControls from './ScoreControls'
import ShoppingList from './ShoppingList'
import UserById from './UserById'
import { useState } from 'react'

const exercises = [
  { title: 'useState 1: Score controls', component: <ScoreControls /> },
  { title: 'useState 2: Editable profile', component: <EditableProfile /> },
  { title: 'useState 3: Shopping list', component: <ShoppingList /> },
  { title: 'useEffect 1: Document title', component: <DocumentTitleCounter /> },
  { title: 'useEffect 2: Keyboard subscription', component: <KeyboardSearch /> },
  { title: 'useEffect 3: Fetch by user ID', component: <UserById /> },
]

function App() {
  const [activeExercise, setActiveExercise] = useState(0)
  const exercise = exercises[activeExercise]

  return (
    <div className="App">
      <h1>React exercises</h1>
      <nav className="exercise-nav" aria-label="Exercise navigation">
        {exercises.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={index === activeExercise ? 'active' : ''}
            onClick={() => setActiveExercise(index)}
          >
            {item.title}
          </button>
        ))}
      </nav>
      {exercise.component}
      <div className="exercise-pager">
        <button
          type="button"
          onClick={() => setActiveExercise((current) => current - 1)}
          disabled={activeExercise === 0}
        >
          Previous
        </button>
        <span>
          Exercise {activeExercise + 1} of {exercises.length}
        </span>
        <button
          type="button"
          onClick={() => setActiveExercise((current) => current + 1)}
          disabled={activeExercise === exercises.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App