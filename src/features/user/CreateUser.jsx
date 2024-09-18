import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlise";
import Button from "../../UI/Button";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }
  return (
    <form onSubmit={handelSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:{" "}
      </p>
      <input
        className="input w-72 mb-8"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="your full name"
      />
      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
