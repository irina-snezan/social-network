import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';


type NavType = {
    isActive?: () => void
}
// const styleLink =({isActive}) => ({color: isActive ? 'red' : 'black'});
// const activeLink = ({isActive}) => `nav_link${isActive ? " active" : ""}`;


function Nav(props: NavType) {

    return (
        <nav className={classes.nav}>
            <div className={classes.menu}>
                <div className={classes.item}>
                    <div>
                        <NavLink to="/profile"  style={({isActive}) => ({color: isActive ? 'blue' : 'black'})}
                                 className={({isActive}) => `nav_link${isActive ? " active" : ""}`}>Profile</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/users" style={({isActive}) => ({color: isActive ? 'blue' : 'black'})}
                                 className={({isActive}) => `nav_link${isActive ? " active" : ""}`}>Users</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/dialogs" style={({isActive}) => ({color: isActive ? 'blue' : 'black'})}
                                 className={({isActive}) => `nav_link${isActive ? " active" : ""}`}>Dialogs</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/messages" style={({isActive}) => ({color: isActive ? 'blue' : 'black'})}
                                 className={({isActive}) => `nav_link${isActive ? " active" : ""}`}>Messages</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/news" style={({isActive}) => ({color: isActive ? 'blue' : 'black'})}
                                 className={({isActive}) => `nav_link${isActive ? " active" : ""}`}>News</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/settings" style={({isActive}) => ({color: isActive ? 'blue' : 'black'})}
                                 className={({isActive}) => `nav_link${isActive ? " active" : ""}`}>Settings</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;


// function Nav(props: NavType) {
//
//     return (
//         <nav className={classes.nav}>
//             <div className={classes.menu}>
//                 <div className={classes.item}>
//                     <div>
//                         <NavLink to="/Profile" className={activeLink}>Profile</NavLink>
//                     </div>
//                     <div className={classes.item}>
//                         <NavLink to="/Users" className={activeLink}>Users</NavLink>
//                     </div>
//                     <div className={classes.item}>
//                         <NavLink to="/Dialogs" className={activeLink}>Dialogs</NavLink>
//                     </div>
//                     <div className={classes.item}>
//                         <NavLink to="/Messages" className={activeLink}>Messages</NavLink>
//                     </div>
//                     <div className={classes.item}>
//                         <NavLink to="/News" className={activeLink}>News</NavLink>
//                     </div>
//                     <div className={classes.item}>
//                         <NavLink to="/Settings" className={activeLink}>Settings</NavLink>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }
//
// export default Nav;