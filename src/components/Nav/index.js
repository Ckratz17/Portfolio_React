import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../utils/helpers"

function Nav(props) {
    //destructure the props
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props

    return (
        //nav
            //map over pages to render the name of each page - activity 10
            //have an onclick for each of these elements created by the map, that sets the current page equal to that page 
            //using setCurrentPage that we get from app.js
    )
}

export default Nav