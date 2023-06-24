import React, { useState } from "react";
import NavigationSidebar from "../nav/index.js";
import Feed from "../Feed/feed";

const Trainerroutineassign = () => {
  const [workoutType, setWorkoutType] = useState("");
  const [workoutText, setWorkoutText] = useState("");
  const [descriptionText, setdescriptionText] = useState("");
  const [setText, setsetText] = useState("");
   const [repText, setrepText] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const handleWorkoutTypeChange = (e) => {
    setWorkoutType(e.target.value);
  };

  const handleWorkoutTextChange = (e) => {
    setWorkoutText(e.target.value);
  };

 const handleSetChange = (e) => {
    setsetText(e.target.value);
  };
   const handleDescriptionChange = (e) => {
      setdescriptionText(e.target.value);
    };
     const handleRepChange = (e) => {
        setrepText(e.target.value);
      };
  const handleAddWorkout = () => {
    if (workoutType && workoutText) {
      const newWorkout = {
        id: Date.now(),
        type: workoutType,
        text: workoutText,
        description :descriptionText,
        set :setText,
        rep :repText,
      };
      setWorkouts([...workouts, newWorkout]);
      setdescriptionText("");
      setWorkoutText("");
       setsetText("");
        setrepText("");
    }
  };

  const handleRemoveWorkout = (id) => {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
  };
const handleSubmitWorkout = () => {
}

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Feed />
      <div className="row">
        <div className="col-2 wd-nav">
          <NavigationSidebar />
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <h4 className="mb-4">ASSIGN ROUTINES</h4>
          <div className="mb-3">
            <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="Enter Workout"
                          value={workoutText}
                          onChange={handleWorkoutTextChange}
                        />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Description"
              value={descriptionText}
              onChange={handleDescriptionChange}
            />
            <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="Sets"
                          value={setText}
                          onChange={handleSetChange}
                        />
                        <input
                                      type="text"
                                      className="form-control mt-2"
                                      placeholder="Reps"
                                      value={repText}
                                      onChange={handleRepChange}
                                    />
            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-primary mt-2" onClick={handleAddWorkout}>
                Add
              </button>
              <span style={{ marginRight: "20px" }}></span>

              <button className="btn btn-primary mt-2" onClick={handleSubmitWorkout}>
                             Submit
                            </button>
            </div>
          </div>
          {workouts.length > 0 && (
            <div>
              <h4 className="mt-4">Added Workouts:</h4>
              <ul className="list-group">
                {workouts.map((workout) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={workout.id}
                  >
                    <div>
                      <strong>{workout.type}</strong>: {workout.text}
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveWorkout(workout.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trainerroutineassign;
