/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'
import {setCheck} from '../features/todoSlice'
import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
function TodoItem({ name, done, id }) {
	const dispatch = useDispatch()

	const handleChek = () =>{
		dispatch(setCheck(id))
	}
	return (
		<Item>
			<CheckBox 
				type="checkbox" 
				checked={done}
				onChange={handleChek}
			/>
			<ItemWrapper check={done}>{name}</ItemWrapper>
		</Item>
	)
}

export default TodoItem

const Item = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	background-color: white;
	margin: 6px 5px;
	height: 40px;
	border-radius: 12px;
	p{
		flex: 1
	}
`

const CheckBox = styled.input`
	margin: 15px;
`
const ItemWrapper = styled.p`
	text-decoration: ${props => props.check ? 'line-through' : 'none'};
`