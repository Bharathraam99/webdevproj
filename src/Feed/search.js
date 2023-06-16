import React from "react";
import { useLocation } from "react-router-dom";
import Feed from "./feed";
import NavigationSidebar from "../nav/index.js";
function Search() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");

  // Perform search logic or API call with searchQuery value
  // ...

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>

          <Feed />

         <div className="row">
       <div className="col-2 wd-nav">
                           <NavigationSidebar />
                         </div>
                         <div className="col-1">
                                     </div>
        <div className="col-6 wd-post">

                </div>
        </div>
        </div>
        );

};

export default Search;