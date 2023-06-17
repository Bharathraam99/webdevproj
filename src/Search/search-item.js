import {useDispatch} from "react-redux";
import SearchStats from "./search-stats";
import { BsXLg } from 'react-icons/bs';

import { AiFillCheckCircle } from "react-icons/ai";

const SearchItem = ({search} ) => {



return(
<>
 <li className="list-group-item">
   <div className="row">
   <div className="col-auto">
          <img width={50}
               className="float-end rounded-circle"
               src={require(`../images/${search.imageUrl}`)} height={48} width={48}/>
        </div>
  <div className="col-10">
    <div className="tuit-info">
      <span className="fw-bolder">{search.username}</span>

      <span className="text-muted">{search.username}</span>
    </div>

  </div>
     <div className="col-auto abc">
       <div className="tuit-stats-container">

         <SearchStats
          search = {search._id}
          search={search}
         />
       </div>
     </div>
     </div>
</li>
</>
)
};
export default SearchItem;
