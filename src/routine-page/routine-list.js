import React, {useEffect} from "react";
import RoutineItem from "./routine-item";
 import {useDispatch, useSelector} from "react-redux";

const RoutineList = () => {
 const {routine} = useSelector((state) => state.routine)

  return (

   <ul className="list-group">
              {
                  routine.map(routine => {
                      return <RoutineItem
                          key={routine.routineId} routine={routine}/>
                  })
              }
          </ul>

  );
};

export default RoutineList;