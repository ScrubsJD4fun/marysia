const raitingColor = (rating: number) => {
  if (rating >= 8) return " #A59400"
  if (rating < 8 && rating >= 7) return " #308E21"
  if (rating < 7 && rating >= 5) return " #777777"
  if (rating < 5) return " #C82020"
}

export default raitingColor
