import React from "react"
import { Card, CardHeader, CardBody, Avatar, Button, Box } from "grommet"
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
      <Box direction='row' wrap justify='between'>
        {chars.flat()?.map(char => (
          <Box key={char.id} width='150px'>
            <Card>
              <CardHeader pad='medium'>{char.name}</CardHeader>
              <CardBody pad='medium'>
                <Avatar src={char.image} />
              </CardBody>
            </Card>
          </Box>
        ))}
      </Box>
      <Box direction='row' align='center' justify='between' pad='medium'>
        <Button primary onClick={() => setSize(size + 1)} label='Load more' />
      </Box>
    </div>
  )
}

export default Home
