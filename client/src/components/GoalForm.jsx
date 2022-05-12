import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {createGoal} from '../features/goals/goalSlice'

const GoalForm = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = () => {
    if (!text) {
      toast.error('Provide a Goal')
      return
    }

    dispatch(createGoal({text}))
    setText('')
  }

  return (
    <div className="goalform">
      <label htmlFor="text">Goal</label>
      <input
        type="text"
        placeholder="Provide a Goal..."
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary" onClick={onSubmit}>
        Add Goal
      </button>
    </div>
  )
}
export default GoalForm
