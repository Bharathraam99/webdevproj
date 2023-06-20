import React, {useEffect} from "react";
import {BsChatSquare, BsHeart, BsHeartFill, BsArrowRepeat, BsShare} from "react-icons/bs";
import {FaThumbsDown} from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";



const SearchStats = ({search}) => {
    useEffect(() => {

    }, []);


    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.user);
    const {token} = useSelector((state) => state.user);



    return (
        <div className="tuit-stats">
        <div className="tuit-stat">
         <span className="fw-bolder tuit-stat-count">0</span>
                    </div>
                    posts
            <div className="tuit-stat">
                            <span className="fw-bolder tuit-stat-count">0</span>
            </div>
followers
            <div className="tuit-stat">
                <span className="fw-bolder tuit-stat-count">0</span>
            </div>
Following
        </div>
    );
};

export default SearchStats;
