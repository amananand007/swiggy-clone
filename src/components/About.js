import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>About Us page</h1>
      <p>
        {""}
        This is namaste react live course chapter 07 - Finding the path
      </p>
      <ProfileFunctionalComponent name={"Anand"} />
      <Profile name={"Aman"} />
    </div>
  );
};

export default About;
