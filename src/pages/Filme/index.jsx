import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme.css'
import api from "../../services/api";

function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => { 
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'cbc02987cfe05e399f860aff979fda4a',
                    language: 'pt-BR'
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                console.log("Filme não encontrado!")
                navigate('/', {replace: true})
            })
        }

        loadFilme();


        return () => {
            console.log('O componente foi desmontado')
        }
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");
 
        let filmesSalvos = JSON.parse(minhaLista) || [];
 
        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id)
 
        if(hasFilme){
         alert('Esse filme já está na lista')
         return;
        }
 
        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
     }
    if(loading){
        return(
            <div className="film-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={`${filme.title}`} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
                </button>
            </div>

        </div>
    )
}
export default Filme;