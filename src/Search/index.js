import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, useLocation} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import Cardio from "./Cardio";
import Powerlifting from "./Powerlifting";
import Strength from "./Strength";
import Stretching from "./Stretching";
import Strongman from "./Strongman";

const Search = () => {
    const {pathname} = useLocation()
    const [ignore, search, type] = pathname.split("/");

    return (
        <div className={"container"}>
            <ul className="nav nav-tabs mb-2 mt-2">
                <li className="nav-item">
                    <Link to={"cardio"} className="nav-link">Cardio</Link>
                </li>
                <li className="nav-item">
                    <Link to={"powerlifting"} className="nav-link">Powerlifting</Link>
                </li>
                <li className="nav-item">
                    <Link to={"strength"} className="nav-link">Strength</Link>
                </li>
                <li className="nav-item">
                    <Link to={"stretching"} className="nav-link">Stretching</Link>
                </li>
                <li className="nav-item d-none d-sm-none d-md-block">
                    <Link to={"strongman"} className="nav-link">Strongman</Link>
                </li>
            </ul>


            <Routes>
                <Route path={"cardio"}
                       element={<Cardio/>}/>
                <Route path={"powerlifting"}
                       element={<Powerlifting/>}/>
                <Route path={"strength"}
                       element={<Strength/>}/>
                <Route path={"stretching"}
                       element={<Stretching/>}/>
                <Route path={"strongman"}
                       element={<Strongman/>}/>
            </Routes>

        </div>

    )
}

export default Search;
