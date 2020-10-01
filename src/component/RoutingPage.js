import React from 'react';
import {
  Link
} from 'react-router-dom'


function RoutingPage (){
	return(
		<>
		<Link to="/">Home Routing Page | </Link>
        <Link to="/about">About Routing Page | </Link>
        <Link to="/belajar">Belajar Routing Page</Link>
        </>
    )
}

export default RoutingPage;