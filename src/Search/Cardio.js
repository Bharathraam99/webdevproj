import CallExternalAPI from "./externalAPI";

const Cardio = () => {
    return (
        <div>
            <h1>
                Cardio
            </h1>
            <CallExternalAPI type={"cardio"}/>
        </div>
    )
}

export default Cardio;