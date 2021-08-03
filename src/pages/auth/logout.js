import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import config from '../../config'
import useLocalStorage from '../../hooks/useLocalStorage'

const Logout = () => {
    useEffect(()=>{
        localStorage.clear()
    })
    return <Redirect to="/" />
}

export default Logout
