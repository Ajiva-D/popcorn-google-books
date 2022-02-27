import React from 'react'
import BookItem from '../components/BookItem/BookItem';

const BookLists = () => {
	return (
		<div>	
			<div className='search-con'>
			<input type="text" className='search-input' placeholder='Search for books...'/>
			</div>
			<div className='book-list-con'>
			<BookItem />
			<BookItem />
			<BookItem />
			<BookItem />
			<BookItem />
			<BookItem />
			<BookItem />
			<BookItem />
			<BookItem />
			<BookItem />
		</div>
	</div>
	)
}

export default BookLists