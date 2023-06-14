import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk } from "./services/auth-thunks";


function AuthContext ({ children }) {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const token=useSelector((state)=>state.user.token)
    useEffect(() => {
        const load = async () => {
            await dispatch(profileThunk(token));
            setLoading(false);
        };
        load();
    }, []);


    if (loading) {
        return (
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        );
    } else {
        return children;
    }
}


export default AuthContext;