import { useDispatch } from "react-redux";
import { API_OPTIONS, options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        // const url = 'https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=IN';  // rapid api
        const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';  //tmdb
        const data = await fetch(url, options);
        const json = await data.json();
        // console.log(json?.results);
        dispatch(addNowPlayingMovies(json?.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;