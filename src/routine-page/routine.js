import React,{useState} from "react";// Import useHistory from React Router
import Feed from "../Feed/feed";
import "./index.css";
import NavigationSidebar from "../nav/index.js";
const Routine = () => {
const [todos, setTodos] = useState([
             { id: 1, title: "15 planks", completed: false },
             { id: 2, title: "Jumping jacks", completed: true },
             { id: 3, title: "Squat", completed: false },
             { id: 4, title: "Running", completed: true },
             { id: 5, title: "Cardio", completed: false },
           ]);
const [showRoutines, setShowRoutines] = useState(true);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setShowRoutines(false);
  };
    const handleRequestRoutine = () => {
      // Handle the request routine logic here
      console.log("Request Routine clicked");
    };

  return (
   <div style={{ backgroundColor: "#f2f2f2" }}>

     <Feed />
     <div className="row">
        <div className="col-2 wd-nav">
                            <NavigationSidebar />
                          </div>
        <div className="col-1">
                          </div>
         <div className="col-6">
{showRoutines && (
              <div className="routine-header">
                          <h1>MY ROUTINE</h1>
                          <button onClick={() => handleDelete(0)} className="del rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold">
                            Request New Routine
                          </button>
                        </div>

 )}
{showRoutines ? (
               <ul className="list-group routine">

                 {todos.map((todo, ndx) => (
                   <li key={todo.id} className="list-group-item">
                     <input

                       type="checkbox"
                       checked={todo.completed}
                       className="me-2 float-start"
                     />
                                 <span>{todo.title}</span>
                                  </li>
                 ))}
               </ul>
 ) : (
 <div className="no-routines">
               <h4 className="h4">Your request is pending.</h4>

             </div>
           )}



                           </div>

         </div>

     </div>
 );
 };
 export default Routine;