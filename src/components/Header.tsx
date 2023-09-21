import { NavLink } from "react-router-dom"




export const Header = () => {
    return (
        <div className="flex justify-center">
            <NavLink className="p-4 text-lg text-pink-500" to={'/'}>Create post</NavLink>
            <NavLink className="p-4 text-lg text-pink-500" to={'/posts'}>Posts</NavLink>
        </div>
    )


}