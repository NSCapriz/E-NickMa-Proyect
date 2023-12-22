import { useState } from "react"

const Buscador = () => {
    const [buscador, setBuscador] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const handleInputChange = (e) => {
        setBuscador(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fechPeliculas()
    }
  return (
    <>
        <div className="container-buscador">
            <h2>¿Qué pelicula estas buscando?</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Escribí el nombre de una pelicula...'
                value={buscador}
                onChange={handleInputChange}
                />
                <button type='submit' className="btn btn-primary">Buscar</button>
            </form>
        </div>
    </>
  )
}

export default Buscador