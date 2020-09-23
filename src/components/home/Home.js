import React from "react"
import { Card, CardHeader, CardBody, Avatar, Button, Box } from "grommet"
// importamos el hook useSRWInfinite para pedir la data y crear el infitescroll
import { useSWRInfinite } from "swr"

//SWR requiere una funcion con la cual hara la peticion al recurso
const fetcher = url => fetch(url).then(r => r.json())

function Home() {
  // Extraemos del hook la data que es la informaci'on que va extrayendo del recurso
  // size para saber cuantos elementos debenos traer
  // y Set size que nos permite traer la siguiente pagina de nuestro recurso
  const { data, size, setSize } = useSWRInfinite((index, previousPageData) => {
    // el hook internamente devuelve null si la longitud de la pagina anterior es 0
    if (previousPageData && previousPageData.length === 0) return null
    // y devolvemos la ruta a la cual vamos a pedir la informacion paginada con nuestro index+1
    // asi cada vez que incremente la pagina con setSize pediremos los datos siguientes
    return `https://rickandmortyapi.com/api/character/?page=${index + 1}`
  }, fetcher)
  // Esta funcion fue requerida gracias a que la api de R&M nos devuelve un objeto con los resultados
  const chars = data ? data.map(({ results }) => results) : []
  // Y como chars es un arreglo de arreglos con los resultados de cada pagina necesitamos hacer flat para que sea solo un arreglo
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
