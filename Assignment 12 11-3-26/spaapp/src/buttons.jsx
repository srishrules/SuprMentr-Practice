import { Link } from "react-router-dom";


function Buttons() {
    return (
        <div>
            <Link to="/">
                <button style={{ backgroundColor: "#d8b4f8", color: "black", margin: "10px" }}>To Do List</button>
            </Link>

            <Link to="/weather">
                <button style={{ backgroundColor: "#d8b4f8", color: "black", margin: "10px" }}>Weather App</button>
            </Link>

            <Link to="/mood">
                <button style={{ backgroundColor: "#d8b4f8", color: "black", margin: "10px" }}>Mood Tracker</button>
            </Link>
        </div>
    );
}



export default Buttons;