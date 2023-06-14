import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createPost} from "../reducers/posts-reducer";

const CreatePost = () => {
    let [post, setPost] = useState('');
    const dispatch = useDispatch();
    const postClickHandler = () => {
        const newPost = {text: post}
        dispatch(createPost(newPost))
        setPost("");
    }

    return (
        <div className={"row mb-2"}>
            <div className="col-auto">
                <img src={require(`../images/default.jpg`)} width={60}/>
            </div>

            <div className="col-10">
                <textarea value={post} placeholder="Write a Post"
                          className="form-control border-0"
                          onChange={(event) => setPost(event.target.value)}>
       </textarea>

            </div>
            <div>
                <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={postClickHandler}>
                    Post
                </button>
            </div>
        </div>
    )

};

export default CreatePost