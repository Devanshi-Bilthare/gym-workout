import React,{useEffect,useState} from 'react'
import {options,fetchData} from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({setExercises, bodyPart,setBodyPart}) => {
  const [search,setSearch] = useState('')
  const [bodyParts,setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData =async()=>{
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options)

      setBodyParts(['all',...bodyPartData])
    }

    fetchExercisesData()
  },[])

  const handleSearch = async ()=>{
      if(search){
          const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',options)
          
          const searchedExercises = exerciseData.filter((exe)=>
            exe.name.toLowerCase().includes(search) || 
            exe.target.toLowerCase().includes(search) ||
            exe.equipment.toLowerCase().includes(search) ||
            exe.bodyPart.toLowerCase().includes(search)
          )

          setSearch('')
          setExercises(searchedExercises)
      }

  }

  return (
    <div className=' p-5 mt-9 text-center'>
      <p className='text-5xl font-semibold mt-20'>Awesome Exercises  You <br/> Should Know</p>
      <div className='relative mb-30'>
        <input className=' w-[80%] border-0 rounded  text-xl py-4 px-6 text-zinc-950' 
                value={search} 
                onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} 
               placeholder='Search Exercises' 
               type='text'
        />
        <button className='bg-red-700 px-10 py-4 text-xl rounded text-zinc-100 mt-10'
                onClick={handleSearch}
        >
            Search
        </button>
      </div>
      <div>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </div>
    </div>
  )
}

export default SearchExercises