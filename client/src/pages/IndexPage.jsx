import { useContext } from "react";
import { UserContext } from "../UserContext.jsx";

export function IndexPage() {
    const {user} = useContext(UserContext)
    console.log("Index page is rendered")

    return(
        <div>
            Index page is here for me
        </div>
    )
}