import React, { useState } from 'react'
import BodyTop from '../../components/bodyTop/BodyTop'
import styles from './home.module.css'
import FilmsDisplay from '../../components/filmDisplay/FilmsDisplay'

const Home = () => {
  const [Inputvalue, setInputValue] = useState('')

  const filmData = [
    {
      id: 1,
      pictureName: 'filmPicture.png',
      title: 'Black Window',
      rate: '6.8'
    },
    {
      id: 2,
      pictureName: 'filmPicture.png',
      title: 'Black WindowShag Chi',
      rate: '7.9'
    },
    {
      id: 3,
      pictureName: 'filmPicture.png',
      title: 'Loki',
      rate: '8.4'
    },
    {
      id: 4,
      pictureName: 'filmPicture.png',
      title: 'How I Met Your Mother',
      rate: '8.3'
    },
    {
      id: 5,
      pictureName: 'filmPicture.png',
      title: 'Money Heist',
      rate: '8.3'
    },
    {
      id: 6,
      pictureName: 'filmPicture.png',
      title: 'Friends',
      rate: '8.8'
    },
    {
      id: 7,
      pictureName: 'filmPicture.png',
      title: 'The Big Bang Theory',
      rate: '8.1'
    },
    {
      id: 8,
      pictureName: 'filmPicture.png',
      title: 'Two And a Half Men',
      rate: '8.1'
    }
  ]
  return (
    <>
      <BodyTop BodyTopTitle={"MaileHereko"} BodyTopDesc={"List of movies and TV Shows, I, Pramod Poudel have watched till date.Explore what I have watched and also feel free to make a suggestion. 😉"} value={Inputvalue} setValue={setInputValue} />
      <div className={styles.container}>
        <div className={styles.internalNav}></div>
        <h1 className={styles.filmCounter}>All <span>({filmData.length})</span></h1>
        <FilmsDisplay filmData={filmData}/>
      </div>
    </>
  )
}

export default Home