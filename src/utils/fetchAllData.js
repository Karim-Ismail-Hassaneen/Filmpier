const API_KEY ='63ab837872a76bff64cdb66b4bc0bb32'
// const Access_Token = import.meta.env.REACT_APP_ACCESS_TOKEN

const BASE_URL = 'https://api.themoviedb.org/3'

export const BaseImage = (filename, size) => {
  return `https://image.tmdb.org/t/p/${size}/${filename}`
}

const fetchAllData = {
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  toprated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  trending: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-Us&page=2`,
  crime: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-Us&query=crime&page=1&include_adult=false`,
  horror: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-Us&query=horror&page=1&include_adult=false`,
  drama: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-Us&query=drama&page=1&include_adult=false`,
  mystery: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-Us&query=mystery&page=1&include_adult=false`,
  action: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-Us&query=action&page=1&include_adult=false`,
  history: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-Us&query=history&page=1&include_adult=false`
}

export default fetchAllData
