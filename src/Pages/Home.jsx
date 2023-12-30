import Banner from "../Layout/Banner";
import Collection from "../Layout/Collection";
import Navbar from "../Layout/Navbar";
import NavbarHead from "./NavbarHead";

const Home = () => {
    return(
        <div>
             <NavbarHead/>
             <Navbar/>
             <Banner/>
             <Collection/>
        </div>
    )}
export default Home;