import CallExternalAPI from "./externalAPI";

const Stretching = () => {
  return(
      <div>
          <h1>
              Stretching
          </h1>
          <CallExternalAPI type={"stretching"}/>
      </div>
  )
}

export default Stretching;