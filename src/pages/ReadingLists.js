import React, {useEffect, useState} from 'react'
import BookItem from '../components/BookItem/BookItem';

const ReadingLists = () => {
	const [readingList, setReadingList] = useState(JSON.parse(localStorage.getItem('readingList')) || [])
	
	
	return (
		<div>	
			<div className='book-list-con'>
			{	readingList.map((book) => <BookItem key={book.id} title={book?.title} author={book?.authors} cover={book?.cover} publisher={book?.publisher} id={book.id} checked={true}/>)}
		</div>
	</div>
	)
}

export default ReadingLists