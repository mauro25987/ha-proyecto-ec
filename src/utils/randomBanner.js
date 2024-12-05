const randomBanners = () => {
  const banners = [
"https://lgecine.org/wp-content/uploads/2010/11/el-padrino_banner.png"  ,  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d2ac1f78219513.5c9e43ebb76f9.png",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69f90eed-5acf-4c96-b8eb-47e2795ff495/da4221s-5a92ee59-23c7-4fb3-88cc-bc3bfa8a8a78.jpg/v1/fill/w_1024,h_342,q_75,strp/joker_banner_by_remixsdesigns_da4221s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQyIiwicGF0aCI6IlwvZlwvNjlmOTBlZWQtNWFjZi00Yzk2LWI4ZWItNDdlMjc5NWZmNDk1XC9kYTQyMjFzLTVhOTJlZTU5LTIzYzctNGZiMy04OGNjLWJjM2JmYThhOGE3OC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KWciDQBMpytXUhonaYISos765WfoUXIOiDOkBKuYiHo",
  ]
  return banners[Math.floor(Math.random() * banners.length)]
}

export default randomBanners
