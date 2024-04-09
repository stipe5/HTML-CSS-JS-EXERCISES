import { useContext } from "react";
import { AppContext } from "../context/UserContext";


function NavbarRightComponent() {

    const {user, basket} = useContext(AppContext);

    return(
        <>
        Signed in as: <a href="#login">{user.username}</a>&nbsp;
        Items in Basket ({basket.items.length})
        </>
    )
}

export {NavbarRightComponent};