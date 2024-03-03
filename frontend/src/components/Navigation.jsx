import React from 'react'

const navigation = ({setFragment}) => {
  return (
    <div className="flex justify-between w-full m-2">
        <h1 className='text-6xl ml-10 font-bold'>quizz</h1>
        <div className='flex gap-10 text-4xl mr-5 '>
            <button className=' bg-black
            -600 rounded-2xl text-white px-6 py-2 border-solid border-2 border-blue-200 hover:bg-gray-850 font-serif text-sm md:text-xl' onClick={()=>setFragment("createQuiz")}>create quizz</button>
            <button className='bg-black
            -600 text-white px-6 py-2 rounded-2xl border-solid border-2 border-blue-200 hover:bg-gray-850 font-serif focus:ring-violet-300'>start quizz</button>
        </div>
    </div>
  )
}

export default navigation