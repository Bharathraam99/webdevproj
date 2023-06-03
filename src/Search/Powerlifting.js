import CallExternalAPI from "./externalAPI";

const Powerlifting=()=>{
    return(
        <div>
            <h1>
                Powerlifting
            </h1>
            <CallExternalAPI type={"powerlifting"}/>
        </div>
    )
}

export default Powerlifting;