import CallExternalAPI from "./externalAPI";

const Strength = ()=>{
    return(
        <div>
            <h1>
                Strength
            </h1>
            <CallExternalAPI type={"Strength"}/>
        </div>
    )
}

export default Strength;