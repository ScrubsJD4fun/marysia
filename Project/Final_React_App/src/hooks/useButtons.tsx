import { useState } from 'react'

export const useButtons = () => {
    const [animation, setAnimation] = useState('')
    const [favor, setFavor] = useState('#00000066 url(/heart.png) no-repeat center')
    const [isFavor, setIsFavor] = useState(false)
    const purpureHeart = '#00000066 url(/purpure-heart.png) no-repeat center'
  return {
    setAnimation,
    setFavor,
    setIsFavor,
    purpureHeart,
    animation,
    favor,
    isFavor
  }
}
