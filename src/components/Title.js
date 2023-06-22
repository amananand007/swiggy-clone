import logo from "../img/1.png";
import "./Title.css";

const Title = () => {
  return (
    <div>
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Title;
