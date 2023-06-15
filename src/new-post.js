import React, {useState} from "react";
import {createPost} from "./TrainerFeed/reducers/posts-reducer";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { BsBarChart} from "react-icons/bs";
import { IoIosCalendar } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiBold, BiItalic } from "react-icons/bi";

 import {useDispatch} from "react-redux";

const NewPost = () => {
let [post, setPost] = useState('');
    const dispatch = useDispatch();
    const postClickHandler = () => {
        const newPost = {text: post}
        dispatch(createPost(newPost))
        setPost("");
    }

 return (

   <div className="row">
     <div className="col-auto">

       <img src="/images/default.jpg" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={post} placeholder="Write a new post"
               className="form-control border-0"
               onChange={(event) => setPost(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary  float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={postClickHandler}>
           Post
         </button>
         <div className="text-primary fs-2">

         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default NewPost;

