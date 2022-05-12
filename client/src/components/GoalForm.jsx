import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'

const GoalForm = () => {
  const [text, setText] = useState('')

  const onSubmit = () => {
    if (!text) {
      toast.error('Provide a Goal')
      return
    }
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
