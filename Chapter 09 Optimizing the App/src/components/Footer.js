import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return(
        <h2 className="p-10 m-10">
            This site is developed by {user.name}- {user.email}
        </h2>
    );
};

export default Footer;