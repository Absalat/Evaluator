import React, { useState } from 'react'

const useLocalStorage = (key,initialValue) => {
    const [data, setData] = useState(()=>{
        try{
            const data = localStorage.getItem(key)
            if(!data){
                return initialValue
            }
            return JSON.parse(data)
        }catch(error){
            return initialValue
        }
    })
    const saveData = (newData) => setData(JSON.stringify(newData))
    return [data,saveData]
    
}

export default useLocalStorage

