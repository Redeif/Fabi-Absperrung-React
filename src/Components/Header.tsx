import { Link } from "react-router";
const Header = () => {
  return (
    <div className="header">

        <h2>
        <Link to="/">Home</Link>
        </h2>
        <h2>
        <Link to="/trialanderror">Trial  and Error</Link>
        </h2>

    </div>
  )
}

export default Header