const randomBanners = () => {
  const banners = [
    "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/800px-Charmander.png",
    "https://i.pinimg.com/originals/90/58/3d/90583d6a4aaafaa6567539ec834f3696.png",
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
  ]
  return banners[Math.floor(Math.random() * banners.length)]
}

export default randomBanners
