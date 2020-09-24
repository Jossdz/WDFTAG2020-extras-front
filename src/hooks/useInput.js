//Los custom hooks son una pieza reutilizable de logica que
//podemos usar dentro de los componentes funcionales
import { useState } from "react"

export default function useIput(initialValue) {
  const [value, setValue] = useState(initialValue)

  function onChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}
