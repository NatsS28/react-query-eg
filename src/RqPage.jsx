import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
function RqPage() {

    const { isLoading, data, isError,error } = useQuery('super-heros', () => {
        return axios.get('http://localhost:3000/superheroes1');
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }
  return (
      <>
          <h2>Super Heroes Page using React client</h2>
          {data?.data.map(hero => {
              return <div>{hero.name}</div>
          })}
      </>
  )
}

export default RqPage