"use client";
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { db } from "../firebaseSetup.js"
import { collection, getDocs, addDoc } from 'firebase/firestore';
async function getTasks(db) {
  const tasksCol = collection(db, 'tasks');
  const colSnapshot = await getDocs(tasksCol);
  const taskList = colSnapshot.docs.map(doc => doc.data());
  return taskList;
}
async function addTask(taskName, taskDescription) {
  const taskCol = collection(db, 'tasks');

  try {
    const docRef = await addDoc(taskCol, {
      name: taskName,
      description: taskDescription,
    });

    console.log('Document added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}
export default function Home() {

  var handleClick = async (e) => {
    await addTask(taskName, taskDescription)
    setUpdate(update + 1)
    setName("")
    setDescription("")
  }
  var changeDescription = (e) => {
    setDescription(e.target.value)
  }
  var changeName = (e) => {
    setName(e.target.value)
  }

  const [myTasks, setTasks] = useState([])
  const [taskName, setName] = useState("") 
  const [taskDescription, setDescription] = useState("")
  const [update, setUpdate] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      const newTasks = await getTasks(db)
      setTasks(newTasks)

    }
    fetchData()
  }, [update])


  return (
    <main className="flex min-h-screen items-center justify-between p-24 flex-col">
      {/* <div className=' text-black text-4xl'>(Your Name)'s Task Application</div> */}
      <div className="rounded-lg p-2 flex flex-col w-1/2 mr-2 bg-gray-100">
        <p className='text-lg text-black font-bold'>Your Tasks</p>
        <div className='flex-col'>
          {myTasks.map((task, index) => (
            <div key={index} className='flex-row shadow-md rounded p-2 bg-gray-50 m-1'>
              <p className=' text-black font-bold text-lg'>{task.name}</p>
              <p className='text-black'>{task.description}</p>
            </div>
          ))}
        </div>

      </div>
      <div className=" bg-gray-100 rounded-lg p-3  flex flex-col w-1/2 ml-2 ">
        <p className='text-lg text-black font-bold'>Add New Task</p>
        <input type='text' placeholder='Task name' value={taskName} onChange={changeName} className='text-black p-2 rounded my-2'></input>
        <input type='text' placeholder='Task description' value={taskDescription} onChange={changeDescription} className='text-black p-2 rounded'></input>
        <button type="button" className="p-2 bg-blue-600 text-black rounded mt-2" onClick={handleClick}>Create New Task</button>
      </div>
    </main>
  )
}
