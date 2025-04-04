import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Gulshan-Gulati')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     } )
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers : {data?.followers ?? 'N/A'}
      {/* Github Followers : {data.followers} */}

      <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"
       alt='Git picture'
       width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Gulshan-Gulati')
    return response.json()
}
