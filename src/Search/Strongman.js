import CallExternalAPI from "./externalAPI";

const Strongman = ()=>{
    return(
        <div>
            <h1>
                Strongman
            </h1>
            <CallExternalAPI type={"strongman"}/>
        </div>
    )
}

export default Strongman;