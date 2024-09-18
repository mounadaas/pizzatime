import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center pt-16">
      <h1 className="font-bold text-md">Something went wrong :(</h1>
      <p className="m-3">{error.message || error.data} </p>
      <button className="linkButton" onClick={() => navigate(-1)}>
        &larr; Go Back
      </button>
    </div>
  );
};

export default Error;
