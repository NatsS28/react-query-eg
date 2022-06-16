import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Traditionalfetch() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/superheroes').then(res => {
            console.log(res);
            setData(res.data)
            setIsLoading(false)
        }).catch((err) => {
            setError(err.message);
            setIsLoading(false);
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

  return (
      <>
          <h2>Super Heroes Page</h2>
          {data.map(hero => {
              return <div>{hero.name}</div>
          })}
      </>
  )
}

export default Traditionalfetch