/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, type FC } from "react"
import { type ShowButtons } from "../../Interfaces/Movies"
import { useMutation } from "@tanstack/react-query"
import { addFavorites } from "../../api/fetchFilms"
import { queryClient } from "../../api/queryClient"
import './Promo.css'
import { Link } from "react-router-dom"
import { Trailer } from "../Trailer"
import { Modal } from "../Modal"
import { useModalTrailer } from "../../hooks/useModalTrailer"
import { useModal } from "../../hooks/useModal"
import type { ProfileSchema } from "../../Interfaces/Auth"
import { useButtons } from "../../hooks/useButtons"


export const PromoButtons: FC<ShowButtons> = ({showAllButtons, onRefresh, id, trailer}) => {
  const { trailerHandler, isCloseTrailer, isOpenTrailer } = useModalTrailer()
  const { userIsLogined, isOpen } = useModal()
  const { ...props } = useButtons()
  
  const favoriteMutate = useMutation({
    mutationFn: () => addFavorites(id),
    onSuccess() {
      props.setFavor(props.purpureHeart)
      props.setAnimation('promo-favorite__add')
      queryClient.invalidateQueries({queryKey: ['favorites']})
    }
  }, queryClient)

  const handleRefresh = () => {
    onRefresh()
  }

  useEffect(() => {
    const me: ProfileSchema | undefined = queryClient.getQueryData(['profile'])
    const toggleFavorites = me?.favorites?.some(fav => fav == id);
    props.setIsFavor(toggleFavorites as boolean)
  }, [props.favor, id, handleRefresh])

  const handleFavorites = () => {
    userIsLogined 
    ? favoriteMutate.mutate() 
    : isOpen()
  }

  return (
    <div className='promo-buttons'>
        <button onClick={isOpenTrailer} className='promo-trailer'>Трейлер</button>
        {trailerHandler && <Modal children={<Trailer videoId={trailer as string} />} closeModal={isCloseTrailer} />}
        {showAllButtons && (
          <Link to={`/films/${id}`} tabIndex={-1}> 
            <button className='promo-about'>О фильме</button>
          </Link>
          )}
        <button 
        onClick={handleFavorites} 
        className='promo-favorite' 
        style={{background: props.isFavor ? props.purpureHeart : props.favor}} 
        disabled={favoriteMutate.isPending}>
          <span className={props.animation}></span>
        </button>
        {showAllButtons && (<button onClick={handleRefresh} className='promo-refresh'></button>)}
    </div>
)
}
