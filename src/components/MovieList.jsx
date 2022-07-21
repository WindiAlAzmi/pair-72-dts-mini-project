import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdb from '../apis/tmdb';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './movieList.css';
import { Link, useNavigate } from "react-router-dom";


const MovieList = () => {
    const [film, setFilm] = useState([]);
    
    const navigate = useNavigate();

    const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const AllMovies = await tmdb.get("/movie/popular");
                setFilm(AllMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    const handleDetail = (id) => {
        navigate(`/detaillFilm/${id}`)

    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            mt: 3,
            mx: 5,
        }}>
        <Swiper id="main" navigation={true} slidesPerView={5} modules={[Navigation]} className="mySwiper"> 
        {
                film.map(movie => (
                <SwiperSlide key={movie.id}>
                     <div className='movie-list'> 
                        <img src={`${BASE_IMAGE_URL}${movie.poster_path}`} className='movie-item-list' onClick={() => handleDetail(movie.id)}/>
                     </div>
                </SwiperSlide>
                ))
            }
         </Swiper>
        </Box>
    );
}

export default MovieList;
