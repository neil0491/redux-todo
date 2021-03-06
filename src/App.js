import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import {selectTodoList} from './features/todoSlice'

function App() {
	const todoList = useSelector(selectTodoList)
	return (
		<Wrapper>
			<ItemsWrapper>
				<ItemList>
					{todoList.map( item => {
						return(
							<TodoItem 
								key={item.id} 
								name={item.item}
								done={item.done}
								id={item.id}
							/>
						)
					})}
				</ItemList>
				<Input />
			</ItemsWrapper>
		
		</Wrapper>
	)
}

export default App

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background: rgba(168, 173, 182);
	display: grid;
	place-items: center
`

const ItemsWrapper = styled.div`
	display: flex;
	width: 500px;
	height: 700px;
	flex-direction: column;
	align-items: center;
	background-color: rgb(232, 234, 237);
	border-radius: 12px;
	padding: 32px 0;
`
const ItemList = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
