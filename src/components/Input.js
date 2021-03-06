import React, { useState } from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

function Input() {
	const [input, setInput] = useState('')
	const dispatch = useDispatch()

	const addTodo = () => {
		console.log(saveTodo())
		dispatch(
			saveTodo({
				item: input,
				done: false,
				id: Date.now(),
			})
		)
		setInput('')
	}

	return (
		<InputWrapper>
			<InputText
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<Button onClick={addTodo}>Add</Button>
		</InputWrapper>
	)
}

export default Input

const InputWrapper = styled.div`
  height: 50px;
  width: 80%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`
const InputText = styled.input`
  background: none;
  border: none;
  flex: 1;
  margin-left: 12px;
  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  margin-right: 8px;
  background-color: rgb(214, 213, 213);
  border: none;
  height: 30px;
  border-radius: 10px;
  width: 80px;
`
