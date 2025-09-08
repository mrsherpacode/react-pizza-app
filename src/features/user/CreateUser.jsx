import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  //update Redux state by dispatching an action to our reducer
  // we use the useDispatch hook provided by React Redux and store it in a variable named dispatch
  const dispatch = useDispatch();
  // we use the useNavigate hook from React Router to get the navigate function
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    //updatName is action creater function from createSlice function that updates the username.
    dispatch(updateName(username));
    // navigate directly to the pizza menu.
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button typeOf="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
