import React from "react"
import { useSWRInfinite } from "swr"

const fetcher = url => fetch(url).then(r => r.json())

function Home() {
  const { data, size, setSize } = useSWRInfinite((index, previousPageData) => {
    if (previousPageData && previousPageData.length === 0) return null
    return `https://rickandmortyapi.com/api/character/?page=${index + 1}`
  }, fetcher)
  const chars = data ? data.map(({ results }) => results) : []
  console.log("CHARs", chars.flat())
  return !data ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1>Rick and Morty infinite Scroll</h1>
      {chars.flat()?.map(char => (
        <p key={char.id}>{char.name}</p>
      ))}
      <button onClick={() => setSize(size + 1)}>Load more</button>
    </div>
  )
}

export default Home
