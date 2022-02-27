import React, { useState} from 'react'
import BookItem from '../components/BookItem/BookItem';
import api from '../api'



const BookLists = () => {
	const [books, setBooks] = useState([])
	const [search, setSearch] = useState('')
	
	const handleSearch = (e)=>{
		setSearch(e.target.value)
	}
	const getBooks = async (e)=>{
		if(e.keyCode === 13 && search != ''){
			let {data} = await	api.get(`?q=${search}`)
			setBooks(data.items);
		}
	}
	return (
		<div>	
			<div className='search-con'>
			<input type="text" className='search-input' placeholder='Search for books...' onChange={handleSearch} onKeyUp={getBooks}/>
			</div>
			<div className='book-list-con'>
		{	books.map((book) => <BookItem key={book.id} title={book?.volumeInfo?.title} author={book?.volumeInfo?.authors} cover={book?.volumeInfo?.imageLinks?.thumbnail} publisher={book?.volumeInfo?.publishedDate} id={book.id}/>)}
		</div>
	</div>
	)
}

export default BookLists