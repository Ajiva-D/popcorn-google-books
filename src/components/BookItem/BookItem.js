import React from 'react'
import './BookItem.css'

const BookItem = () => {
	return (
		<div className='book-item-con'>
			<img src="https://books.google.com.ng/books/content?id=3BpOKfMbBowC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE7224tQOxf2MvzqKkSgxnGtkuli2QVIovajR1omZevJMOyj2KN1TVIpOUHvnpybH9pUMVRrEv4tSp4BNFscL37eEvVftNTO4w7GkjJvxpXtWpCVdEt_ZmdUnjrw_2MecIX-UBULe" alt="" />
			<div className='book-info'>
				<div>
					<p className='book-title'><span>Title: </span> The Lion, the Hare and the wardrobe</p>
					<p><span>Author: </span> JK ROWLING</p>
					<p><span>Publisher: </span> Macmillan</p>
				</div>

				<div>
					<input id='one' type='checkbox' />
					<label for='one'>
						<span></span>
						Add to reading list
					</label>
				</div>
			</div>
		</div>
	)
}

export default BookItem