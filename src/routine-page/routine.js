import React,{useState} from "react";// Import useHistory from React Router
import Feed from "../Feed/feed";
import "./index.css";
import NavigationSidebar from "../nav/index.js";
const Routine = () => {
const [todos, setTodos] = useState([
             { id: 1, title: "15 planks", description :
             "Start in a tabletop position on your hands and knees, then lower down to your forearms with your elbows stacked beneath your shoulders", set: "3", reps:"5",completed: false },
             { id: 2, title: "Jumping jacks",description : "a conditioning exercise performed from a standing position by jumping to a position with legs spread and arms raised and then to the original position.", set: "5", reps:"3", completed: true },
             { id: 3, title: "Squat", description : "an exercise in which a standing person lowers to a position in which the torso is erect and the knees are deeply bent and then rises to an upright position.", set: "45", reps:"54",completed: false },
             { id: 4, title: "Running",description : "Running is the action of rapidly propelling yourself forward on foot. When running, there is a moment when both feet are off the ground (as opposed to walking, when one foot is always on the ground), making it a high-impact exercise.", set: "43", reps:"76", completed: true },
             { id: 5, title: "Cardio", description : "Cardio is defined as any type of exercise that gets your heart rate up and keeps it up for a prolonged period of time. Your respiratory system will start working harder as you begin to breathe faster and more deeply.", set: "76", reps:"22",completed: false },
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
               <button
                 onClick={() => handleDelete(0)}
                 className="del rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold"
               >
                 Request New Routine
               </button>
             </div>
           )}

           {showRoutines ? (
             <table className="table table-striped table-bordered rounded">
               <thead>
                 <tr>
                   <th>Title</th>
                   <th>Description</th>
                   <th>Set</th>
                   <th>Reps</th>
                 </tr>
               </thead>
               <tbody>
                 {todos.map((todo, ndx) => (
                   <tr key={todo.id}>
                     <td>{todo.title}</td>
                     <td>{todo.description}</td>
                     <td>{todo.set}</td>
                     <td>{todo.reps}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
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