import {useDispatch} from "react-redux";
import {BsXLg} from 'react-icons/bs';
import {AiFillCheckCircle} from "react-icons/ai";
import "./index.css";

const RoutineItem = ({routine}) => {
    const dispatch = useDispatch();

    const deleteRoutineHandler = (id) => {

    }

    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-auto">
                        <img width={50}
                             className="float-end rounded-circle"
                             src={require(`../images/default.jpg`)} height={48} width={48}/>
                    </div>
                    <div className="col-10">
                        <div className="tuit-info">

                        </div>
                        <div></div>

                    </div>
                    <div className="col-8">
                        <div>
                            <button className="btn delete-button" onClick={() => deleteRoutineHandler(routine.routineId)}>
                                <BsXLg/>
                            </button>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="tuit-stats-container">


                        </div>
                    </div>
                </div>
            </li>
        </>
    )
};
export default RoutineItem;

