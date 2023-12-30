import { menuitems } from "./menuItems";
import MenuItem from "./MenuItem";
const Menubar = () => {
    return(
        <div>
             <nav>
                <ul>
                    {menuitems.map((menu,index) => {
                        const menuBar = 0
                        return <MenuItem item={menu} menuBar={menubar} key={index}/>
                    })}
                </ul>
                </nav> 
        </div>
    )}
export default Menubar;