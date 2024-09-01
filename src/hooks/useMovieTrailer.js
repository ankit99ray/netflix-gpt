import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const url = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos';
        const data = await fetch(url, options);
        const json = await data.json();
        // console.log(json);

        const filterVideos = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterVideos.length ? filterVideos[0] : json.results[0];
        // console.log(trailer);
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideo();
    }, []);
}

export default useMovieTrailer;