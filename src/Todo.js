import { useState } from "react";
import ListItem from "./ListItems";

function Todo() {

    const [activity, setActivity] = useState('')
    const [list, setList] = useState([])

    const addActivity = () => {
        setList(() => {
            const updatedList = [...list, activity]
            return updatedList
        })
        
        setActivity('')
    }

    const handleClickRemove = (index) => {
        const updatedList = list.filter((item, id) => {
            return id !== index
        })
        setList(updatedList)
    }

    const handleRemoveAll = () => {
        setList([])
    }

    return ( 
        <div className="min-h-screen w-full bg-sky-900 flex items-center justify-center">
            <div className="min-w-[30rem] w-1/2 bg-white p-3 rounded-md">
                <h1 className="text-xl text-center font-poppins mb-5">TODO List</h1>
                <div className="flex items-center justify-center gap-2">
                    <input type="text" placeholder="Enter your event" className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md font-poppins grow" value={activity} onChange={e => setActivity(e.target.value)}/>
                    <button className="bg-blue-500 px-3 py-2 font-poppins rounded-md text-white" onClick={addActivity}>Add Event</button>
                </div>
                { list.length > 0 && <p className="font-poppins text-center mt-4 mb-2 ">Your TODOs</p>}
                { list.length > 0 && 
                    <>
                        <div className="flex flex-col gap-2 bg-gray-300 p-2 rounded-md">
                        {   
                            list !== [] && list.map((data, i) => {
                            return <ListItem text={data} key={i} handleClickRemove={() => handleClickRemove(i)}/>
                            })
                        }        
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-red-500 text-white px-3 py-2 rounded-md mt-2 font-poppins" onClick={handleRemoveAll}>Remove All</button>
                        </div>
                    </>
                }
            </div>
        </div>
     );
}

export default Todo;