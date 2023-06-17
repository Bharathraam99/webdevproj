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
                        Posts
                    </div>
            <div className="tuit-stat">
                Followers
                {/*<span className="tuit-stat-count">{post.retuits}</span>*/}
            </div>

            <div className="tuit-stat">
                Following
                {/*<span className="tuit-stat-count"> {post.dislikes}</span>*/}
            </div>


        </div>
    );
};

export default SearchStats;
