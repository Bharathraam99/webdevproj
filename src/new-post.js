import React, {useState} from "react";
import axios from "axios";
//import {createPost} from "./TrainerFeed/reducers/posts-reducer";
import {AiOutlinePicture} from "react-icons/ai";
import {AiOutlineFileGif} from "react-icons/ai";
import {MdFormatListBulleted} from "react-icons/md";
import {BsEmojiSmile} from "react-icons/bs";
import {BsBarChart} from "react-icons/bs";
import {IoIosCalendar} from "react-icons/io";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BiBold, BiItalic} from "react-icons/bi";

import {useDispatch, useSelector} from "react-redux";
import {addPostThunk, getPostThunk} from "./services/post-thunks";

const NewPost = () => {
    let [post, setPost] = useState('');
    let [selectedFile, setSelectedFile] = useState(null);

    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);

    const upload = () => {
        document.getElementById("selectImage").click()
    }

    const fileSelectedHandler = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const postClickHandler = async () => {
        const fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name);
        let image = "";

        if (selectedFile != null) {
            await axios.post("https://api.imgbb.com/1/upload?key=057c9a9ac1bb914d95dfe4a1d47f50d5", fd).then(res => {
                image = res.data.data.display_url;
            });
        }

        console.log("Hello Image " + image);
        const newPost = {postBody: post, postTitle: "abc", imageUrl: image}
        await dispatch(addPostThunk({newPost, token}))
        await dispatch(getPostThunk(token))
        setPost("");
        setSelectedFile(null);
    }

    return (

        <div className="row">
            <div className="col-auto">

                <img src="/images/default.jpg" width={60}/>
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
                    <input id={"selectImage"} style={{display: 'none'}} type="file" onChange={fileSelectedHandler}/>
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
        </div>
    );
}
export default NewPost;

