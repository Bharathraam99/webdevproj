import React, {useEffect, useState} from "react";
import SearchItem from "./search-item";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsersThunk} from "../services/follow-thunks";

const SearchList = ({searchKeyword}) => {
    //const {search} = useSelector((state) => state.search)
    const dispatch = useDispatch();
    let [search, setSearch] = useState([]);
    const {token} = useSelector((state) => state.user);
    const {currentUser} = useSelector((state) => state.user);

    useEffect(() => {
        console.log("SEARCH EXECUTED")
        const load = async () => {
            const allUsers = await dispatch(getAllUsersThunk(token)).then(res => res.payload);
            setSearch(allUsers.filter((user) =>
                user.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                user.lastName.toLowerCase().includes(searchKeyword.toLowerCase())
            ))
        }
        load();
    }, [])
    return (

        <> {search.length !== 0 && <ul className="list-group">
            {
                search.map(s => {
                    console.log("SearchItem: " + JSON.stringify(s))
                    return <SearchItem
                        key={s.userId} search={s}/>
                })
            }
        </ul>}</>

    );
};

export default SearchList;