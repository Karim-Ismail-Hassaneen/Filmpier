import fetchAllData from "../utils/fetchAllData"
import MovieRow from './MovieRow'

const MovieScetion = () => {
  return (
    <div>
    <MovieRow rowID='1' title='Upcoming' fetchURL={fetchAllData.upcoming}/>
    <MovieRow rowID='2' title='Popular' fetchURL={fetchAllData.popular}/>
    <MovieRow rowID='3' title='Top Rated' fetchURL={fetchAllData.toprated}/>
    <MovieRow rowID='4' title='Trending' fetchURL={fetchAllData.trending}/>
    <MovieRow rowID='5' title='Action' fetchURL={fetchAllData.action}/>
    <MovieRow rowID='6' title='History' fetchURL={fetchAllData.history}/>
    <MovieRow rowID='7' title='Mystery' fetchURL={fetchAllData.mystery}/>
    <MovieRow rowID='8' title='Drama' fetchURL={fetchAllData.drama}/>
    {/* <MovieRow title='Horror' fetchURL={fetchAllData.horror}/> */}
    {/*<MovieRow title='Crime' fetchURL={fetchAllData.crime}/> */}
  </div>
  )
}

export default MovieScetion