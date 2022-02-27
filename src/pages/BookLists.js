import React, { useState} from 'react'
import BookItem from '../components/BookItem/BookItem';
import api from '../api'
import Skeleton from '../components/Skeleton/Skeleton';



const BookLists = () => {
	const [books, setBooks] = useState([])
	const [search, setSearch] = useState('')
	const [loading, setLoading] = useState(false)
	const [empty, setEmpty] = useState(false)
	
	const handleSearch = (e)=>{
		setSearch(e.target.value)
	}
	const getBooks = async (e)=>{
		if(e.keyCode === 13 && search !== ''){
			setLoading(true)
			setEmpty(false)
		try {
			let {data} = await	api.get(`?q=${search}`)
			if(!data.items){
				setEmpty(true)
				return
			}
			setBooks(data.items);
		} catch (error) {
			console.log(error);
		}finally{
			setLoading(false)
		}
		}
	}
	return (
		<div>	
			<div className='search-con'>
			<input type="text" className='search-input' placeholder='Search for books...' onChange={handleSearch} onKeyUp={getBooks}/>
			</div>
			<div className='book-list-con'>
		
		{	empty ? <p className='errorText'>No Books Available for that search!</p> : loading ? [...Array(5)].map((e, i) =>	<Skeleton/> ) :	
		books.map((book) => <BookItem key={book.id} title={book?.volumeInfo?.title} author={book?.volumeInfo?.authors} cover={book?.volumeInfo?.imageLinks?.thumbnail} publisher={book?.volumeInfo?.publisher} id={book.id}/>)}
		</div>
	</div>
	)
}

export default BookLists