import React from 'react';
import './Inline.css'

const ket = {
	color: 'white',
	backgroundColor:'red',
}

function Inline(){
	return(
		<>
		<p style={{color: 'blue',backgroundColor:'Orange', marginTop:'100px', paddingTop:'50px'}}>Belajar React CSS Inline</p>
		<p style={ket}>Belajar Penulisan CSS Internal File</p>

		<p className="ketJudul">Belajar CSS Eksternal 1</p>
		<p id="ketText">Belajar CSS Eksternal 1</p>
		</>


	)
}

export default Inline;