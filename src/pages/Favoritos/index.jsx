import { useEffect, useState } from 'react'; 
import './favoritos.css'
import { Link } from 'react-router-dom';

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeflix")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])
    return(
        <div className='meus-filmes'>
            <h1>Meus filmes favoritos</h1>

            <ul>
            {filmes.map((filme) => {
                return(
                    <li key={filme.id}>
                        <span>{filme.title}</span>
                    <div>
                        <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                        <button>Excluir</button>
                    </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Favoritos;