import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  //we use the useSelector hook to read the username from the Redux store:
  const username = useSelector(state => state.user.username);
  return (
    <div className="my-10 p-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500 md:text-3xl">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {/* we conditionally render either the CreateUser component if the username is an empty string, or a button that redirects to the menu if the username exists.  */}
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" typeOf="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
