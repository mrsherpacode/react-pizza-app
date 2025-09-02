import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  // The useRouteError hook provides access to the error object inside the error element component.
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>
      <LinkButton>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
