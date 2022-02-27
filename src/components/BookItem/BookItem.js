import React, { useState} from 'react'
import './BookItem.css'

const BookItem = ({id,title,author,publisher,cover}) => {
const [isChecked, setIsChecked] = useState(false)
const handleCheck= ()=>{
	setIsChecked(!isChecked)
	let book = {
		title,
		author,
		cover,
		id,
	}
	if(!localStorage.getItem('readingList')){
		localStorage.setItem('readingList',JSON.stringify([]))
	}
	let readingList = JSON.parse(localStorage.getItem('readingList'));
	console.log(readingList);
	if(!isChecked){
		readingList.push(book)
		localStorage.setItem('readingList',JSON.stringify(readingList))
	}else{
		readingList = readingList.filter(function( book ) {
			return book.id !== id;
	});
	localStorage.setItem('readingList',JSON.stringify(readingList))
	}
}
	return (
		<div className='book-item-con'>
			<img src={cover} alt="" />
			<div className='book-info'>
				<div>
					<p className='book-title'><span>Title: </span> {title}</p>
					<p><span>Author: </span> {author ? author.toString() : 'Not available'}</p>
					<p><span>Publisher: </span> {publisher}</p>
				</div>

				<div>
					<input id={id} type='checkbox' checked={isChecked} onChange={handleCheck} />
					<label htmlFor={id}>
						<span></span>
					{isChecked ? 'Remove from' :	'Add to'} reading list
					</label>
				</div>
			</div>
		</div>
	)
}

export default BookItem