import { useRouteError } from "react-router-dom";


const Error = () => {
    const Err = useRouteError();
    const {status, statusText} = Err;
    console.log(Err);
    return(
        <div>
            <h1>Oops!!!!!!!!</h1>
            <h2>Something went wrong .....🐸....🫀......</h2>
            <h2>{status + ":" +statusText}</h2>
        </div>
    );
};

export default Error;