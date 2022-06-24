import Head from 'next/head'
import Banner from '../components/banner'
import Header from '../components/header'
import { Movie } from '../typings'
import requests from '../utils/requests'
import Row from '../components/row'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({ netflixOriginals,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
  topRated,
  trendingNow }: Props) => {

  return (
    <div
      className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>
          Netflix
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative pl-4 pb-24 pt-8 lg:space-y-24 lg:pl-16 lg:pb-8">
        <Banner netflixOriginals={netflixOriginals} />

        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title='Top Rated' movies={topRated} />
          <Row title='Action Thriller' movies={actionMovies} />
          <Row title='Comedy' movies={comedyMovies} />
          <Row title='Horror' movies={horrorMovies} />
          <Row title='Romance' movies={romanceMovies} />
          <Row title='Documentaries' movies={documentaries} />
        </section>
      </main>
      {/* {showModal && <Modal />} */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
  ])
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovie: romanceMovies.results,
      documentaries: documentaries.results,
    }
  }
}
