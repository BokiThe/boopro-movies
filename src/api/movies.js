
import axiosInst from '../utils/axiosInst';

const getMoviesByGanre = async (id) => {

    const { data } = await axiosInst.get(`/discover/movie?with_genres=${id}&page=1&api_key=d38aa8716411ef7d8e9054b34a6678ac`).then(data => Promise.resolve(data));
    console.log("getMoviesbygenre resaults su ", data.results)
    return data.results;
}

export default getMoviesByGanre;