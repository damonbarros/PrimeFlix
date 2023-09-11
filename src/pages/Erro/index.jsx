import { Link } from 'react-router-dom'
import './erro.css'

function Erro(){
    return(
        <div className='Not-Found'>
        <h1>Página não encontrada!</h1> <br />
        <Link to='/'>Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro;