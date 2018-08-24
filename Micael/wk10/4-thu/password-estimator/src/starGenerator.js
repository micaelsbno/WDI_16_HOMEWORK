function starsGenerator(starNumber) {
  let stars = []
  for (let i = 0; i < starNumber; i++) {
    stars.push('<i class="far fa-star"></i>')
  }
  return stars
}

module.exports = starsGenerator