import { useState } from "react"

const Buscador = () => {
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = 'acf5472e45e436d5026bfd4c5e792981'

    const [buscador, setBuscador] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const fechPeliculas = async () =>{
        try{
            const response = await fetch(`${urlBase}?query=${buscador}&api_key=${API_KEY}`)
            const data = await response.json()
            setPeliculas(data)
        }
        catch (error){
            console.error('Ha ocurrido un error: ', error)
        }
    }
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