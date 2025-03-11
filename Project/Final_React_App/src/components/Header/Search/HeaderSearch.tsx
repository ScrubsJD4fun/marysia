import { fetchMovie } from '../../../api/fetchFilms';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../../api/queryClient';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './HeaderSearch.css'
import star from '/star.png'
import { Loader } from '../../Loader';
import { Link } from 'react-router-dom';
import { HeaderInput } from './HeaderInput';
import { useModalSearch } from '../../../hooks/useModalSearch';
import { Modal } from '../../Modal';
import { SvgSearch } from '../../../assets';

export const HeaderSearch = () => {
    const [query, setQuery] = useState('');
    const isMobile = useMediaQuery({ maxWidth: 576 });
    const { searchHandler, isCloseSearch, isOpenSearch } = useModalSearch() 

  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchMovie('title', query),
    queryKey: ['movie', query], // Ключ запроса зависит от query
    enabled: !!query, // Запрос выполняется только если query не пустой
  }, queryClient);


  return (
    <> 
        {isMobile 
        ? <button onClick={() => isOpenSearch()} className='btn-reset search-btn'><SvgSearch /></button> 
        : <HeaderInput query={query} setQuery={setQuery} />}
        
        {searchHandler && <Modal children={<HeaderInput query={query} setQuery={setQuery} />} closeModal={isCloseSearch} />}

        {isLoading && <Loader />}
        {isError && <div>Ошибка при поиске фильмов</div>}
        {data && (
            <ul className='list-reset search-result'>
            {(data 
            ? data.filter(movie => movie.title.toLowerCase().split(' ').some((word) => word.startsWith(query.toLowerCase()))) 
            : [])
            .map((movie) => (
                <Link onClick={() => {setQuery(''); isCloseSearch()}} key={movie.id} to={`/films/${movie.id}`}>
                    <li className='result-item' key={movie.id}>
                        <img className='result-poster' src={movie.posterUrl} alt={movie.title} />
                        <div>
                            <div className='result-info'>
                                <div className='result-border'>
                                    <img className='result-star' src={star} alt="star" />
                                    <span className='result-rating'>{movie.tmdbRating.toFixed(1)}</span>

                                </div>
                                <span>{movie.releaseDate?.split('-')[0]}</span>
                                <span>{movie.genres?.join(', ')}</span>
                                <span>{`${movie.runtime} мин`}</span>
                            </div>
                            <div>
                                <h3 className='result-title'>{movie.title}</h3>
                            </div>
                        </div>
                    </li>
                </Link>
            ))}
            </ul>
        )}
    </>
  )
}
