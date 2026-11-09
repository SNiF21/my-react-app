import './App.css'
import EditableProfile from './EditableProfile'
import ScoreControls from './ScoreControls'
import ShoppingList from './ShoppingList'

const activeExercise = 2

function App() {
  let exercise

  switch (activeExercise) {
    case 2:
      exercise = <EditableProfile />
      break
    case 3:
      exercise = <ShoppingList />
      break
    default:
      exercise = <ScoreControls />
  }

  return (
    <div className="App">
      <h1>useState exercises</h1>
      {exercise}
    </div>
  )
}

export default App