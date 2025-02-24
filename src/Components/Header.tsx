import { Link } from "react-router";
const Header = () => {
  return (
    <div className="header">

        <h2>
        <Link to="/Fabi-Absperrung-React/">Home</Link>
        </h2>
        <h2>
        <Link to="/Fabi-Absperrung-React/trailanderror">Trail  and Error</Link>
        </h2>

    </div>
  )
}

export default Header