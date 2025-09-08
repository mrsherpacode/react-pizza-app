//Accessing Redux State in Components
// To access Redux state inside a React component, use the useSelector hook from react-redux. This hook accepts a selector function that receives the entire Redux state and returns the part of the state you want.

import { useSelector } from "react-redux";

function Username() {
  const username = useSelector(state => state.user.username);
  if (!username) {
    return null;
  }
  return (
    <div className="text-sem hidden font-semibold md:block">{username}</div>
  );
}

export default Username;
