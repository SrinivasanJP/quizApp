import React, { useState } from 'react'
const Questions = ({no, setQuestions, questions}) => (
    <div className='flex flex-col m-5'>
    <label htmlFor={`q${no}`} className=' text-xl font-semibold my-3'>Enter Question {no}</label>
    <input name={`title${no}`} required id={`title${no}`} type="text" placeholder="Enter Question" className=' bg-slate-100 focus:bg-slate-200 rounded-xl px-4 py-2 outline-none text-xl mb-5' value={questions[no-1]?.question||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], question: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="text" name={`op1${no}`} id={`op1${no}`} placeholder="Enter Option 1" className=' bg-slate-200 rounded-xl px-4 py-2 outline-none focus:bg-slate-300 mb-2' value={questions[no-1]?.op1||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], op1: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="text" name={`op2${no}`} id={`op2${no}`} placeholder="Enter Option 2" className=' bg-slate-200 rounded-xl px-4 py-2 outline-none focus:bg-slate-300 mb-3' value={questions[no-1]?.op2||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], op2: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="text" name={`op3${no}`} id={`op3${no}`} placeholder="Enter Option 3" className=' bg-slate-200 rounded-xl px-4 py-2 outline-none focus:bg-slate-300 mb-3' value={questions[no-1]?.op3||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], op3: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="text" name={`op4${no}`} id={`op4${no}`} placeholder="Enter Option 4" className=' bg-slate-200 rounded-xl px-4 py-2 outline-none focus:bg-slate-300 mb-3' value={questions[no-1]?.op4||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], op4: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="number" max={4} min={1} name={`ans${no}`} id={`ans${no}`} placeholder="Which is the correct answer" className=' bg-green-100 rounded-xl px-4 py-2 outline-none focus:bg-slate-100 mb-3' value={questions[no-1]?.ans||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], ans: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
  </div>
)

const CreateQuizPage = () => {
    const [noOfQuestions, setNoOfQuetions] = useState(1);
    const [questions, setQuestions] = useState([])
    const handleAddQuestions = () => {
        setNoOfQuetions((pre)=> pre+1)
    }
    const handleCreate = ()=>{
        console.log(questions)
    }
  return (
    <div className='flex flex-col w-[80%] mb-10'>
        <form action="#" method="post" className=' flex-col flex'>
            <div className=' flex justify-around bg-slate-200 rounded-md items-center'>
            <label htmlFor="title" className='m-5  font-bold text-2xl font-sans'>Quiz Title</label>
            <input name='title' id='title' type='text' placeholder='Enter Quiz Title' className=' rounded-xl p-3 w-[70%] outline-none'></input>
            </div>
            
            {[...Array(noOfQuestions)].map((_,index)=>(<Questions key={index}  no={index+1} setQuestions={setQuestions} questions={questions}/>))}
        </form>
        <div className='flex justify-around items-center'>
        <button onClick={handleAddQuestions} className='bg-blue-400 text-white font-bold px-5 py-3 rounded-xl text-xl'>Add Questions</button>
        <button onClick={handleCreate} className='bg-blue-400 text-white font-bold px-5 py-3 rounded-xl text-xl'>Create Quiz</button>
        </div>
        
    </div>
  )
}

export default CreateQuizPage