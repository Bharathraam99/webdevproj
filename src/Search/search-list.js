import React, {useEffect} from "react";
import SearchItem from "./search-item";
 import {useDispatch, useSelector} from "react-redux";

const SearchList = () => {
 const {search} = useSelector((state) => state.search)

  return (

   <ul className="list-group">
              {
                  search.map(search => {
                      return <SearchItem
                          key={search.searchId} search={search}/>
                  })
              }
          </ul>

  );
};

export default SearchList;