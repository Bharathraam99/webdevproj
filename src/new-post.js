import React, {useEffect, useState} from "react";
import axios from "axios";

import {useDispatch, useSelector} from "react-redux";
import {addPostThunk, getPostThunk} from "./services/post-thunks";
import {profileThunk} from "./services/auth-thunks";

const NewPost = () => {
    let [post, setPost] = useState('');
    let [selectedFile, setSelectedFile] = useState(null);
    let [selectedFileName, setSelectedFileName] = useState("");
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const {currentUser} = useSelector((state) => state.user);

    const upload = () => {
        document.getElementById("selectImage").click()
    }

    const fileSelectedHandler = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setSelectedFileName(file ? file.name : "");
    }

    const postClickHandler = async () => {
        let image = "";

        if (selectedFile != null) {
            const fd = new FormData();
            fd.append('image', selectedFile, selectedFile.name);
            await axios.post("https://api.imgbb.com/1/upload?key=057c9a9ac1bb914d95dfe4a1d47f50d5", fd).then(res => {
                image = res.data.data.display_url;
            });
        }

        const newPost = {postBody: post, postTitle: "abc", imageUrl: image}
        await dispatch(addPostThunk({newPost, token}))
        await dispatch(getPostThunk(token))
        setPost("");
        setSelectedFileName("");
        setSelectedFile(null);
    }

    return (

        <>
            {currentUser !== null && <div className="row">
                <div className="col-auto">

                    <img className={"rounded-circle"} src={`${currentUser.fitUser.profilePicture}`} width={60}/>
                </div>
                <div className="col-10">
       <textarea value={post} placeholder="Write a new post"
                 className="form-control border rounded"
                 style={{height: '80px'}}
                 onChange={(event) => setPost(event.target.value)}>
       </textarea>

                    <div>
                        <button onClick={upload} className="rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold">
                            Upload Image
                        </button>
                        &nbsp;  &nbsp;
                        <span>{selectedFileName}</span>
                        <input id={"selectImage"} style={{display: 'none'}} accept="image/*" type="file"
                               onChange={fileSelectedHandler}/>
                        <button className="rounded-pill btn btn-primary  float-end mt-2 ps-3 pe-3 fw-bold"
                                onClick={postClickHandler}>
                            Post
                        </button>
                        <div className="text-primary fs-2">

                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <hr/>
                </div>
            </div>}
        </>

    );
}
export default NewPost;

