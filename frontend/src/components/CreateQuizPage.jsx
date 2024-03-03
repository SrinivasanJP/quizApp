import React, { useState } from 'react'
const Questions = ({no, setQuestions, questions}) => (
    <>
    <label htmlFor={`q${no}`}>Enter Question {no}</label>
    <input name={`title${no}`} id={`title${no}`} type="text" placeholder="Enter Question" value={questions[no-1]?.question||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], question: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="text" name={`op1${no}`} id={`op1${no}`} placeholder="Enter Option 1" value={questions[no-1]?.op1||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], op1: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="text" name={`op2${no}`} id={`op2${no}`} placeholder="Enter Option 2" value={questions[no-1]?.op2||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], op2: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="text" name={`op3${no}`} id={`op3${no}`} placeholder="Enter Option 3" value={questions[no-1]?.op3||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], op3: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="text" name={`op4${no}`} id={`op4${no}`} placeholder="Enter Option 4" value={questions[no-1]?.op4||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], op4: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
    <input type="text" name={`ans${no}`} id={`ans${no}`} placeholder="Which is the correct answer" value={questions[no-1]?.ans||""}  onChange={(e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[no - 1] = { ...updatedQuestions[no - 1], ans: e.target.value };
        setQuestions(updatedQuestions);
      }}/>
  </>
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
    <div className='flex flex-col bg-gray-400 w-[80%]'>
        <form action="#" method="post" className=' flex-col flex'>
            <div className=''>
            <label htmlFor="title">Quiz Title</label>
            <input name='title' id='title' type='text' placeholder='Enter Quiz Title'></input>
            </div>
            
            {[...Array(noOfQuestions)].map((_,index)=>(<Questions key={index}  no={index+1} setQuestions={setQuestions} questions={questions}/>))}
        </form>
        <div className=''>
        <button onClick={handleAddQuestions}>Add Questions</button>
        <button onClick={handleCreate}>Create Quiz</button>
        </div>
        
    </div>
  )
}

export default CreateQuizPage