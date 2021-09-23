import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div>
      <div>
        <Link to="/poc/1">First State</Link>
      </div>
      <div>
        <Link to="/poc/2">Second State</Link>
      </div>
      <div>
        <Link to="/poc/3">Third State</Link>
      </div>
    </div>
  );
}
