import axios from 'axios'

//BASE DA URL: https://api.themoviedb.org/3/
//URL: https://api.themoviedb.org/3/movie/157336?api_key=cbc02987cfe05e399f860aff979fda4a

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;