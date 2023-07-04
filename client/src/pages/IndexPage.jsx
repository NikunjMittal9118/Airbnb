import { useContext } from "react";
import { Header } from "../header.jsx";
import { UserContext } from "../UserContext.jsx";

export function IndexPage() {
    const {user} = useContext(UserContext)
    console.log(user,"Index page is rendered")

    return(
        <div>
            Index page is here for me
        </div>
    )
}