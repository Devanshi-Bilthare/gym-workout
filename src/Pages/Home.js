import React from 'react'
import { useState } from 'react'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'

const Home = () => {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercises,setExercises] = useState([])

  return (
    <div>
        <HeroBanner/>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </div>
  )
}

export default Home