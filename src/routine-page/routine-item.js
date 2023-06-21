import { useDispatch } from "react-redux";
import { BsXLg } from 'react-icons/bs';
import { AiFillCheckCircle } from "react-icons/ai";
import "./index.css";

const RoutineItem = ({ routine }) => {
  const dispatch = useDispatch();

  const deleteRoutineHandler = (id) => {
    // Handle delete routine functionality
  }

  return (
    <li className="list-group-item routinepost">

          <div className="tuit-info">
          <h2 className="h2">MY ROUTINE</h2>
              {routine.routineBody.map((exercise) => (
                <div className="exercise" key={exercise.exerciseId}>
                  <input
                    type="checkbox"
                    checked={exercise.completed}
                    onChange={() => {

                    }}
                  />
                  <span>{exercise.exerciseName}</span>
                </div>
              ))}


        </div>

          <div>
            <button className="btn delete-button" onClick={() => deleteRoutineHandler(routine.routineId)}>
              <BsXLg/>
            </button>
          </div>


    </li>
  );
};

export default RoutineItem;
