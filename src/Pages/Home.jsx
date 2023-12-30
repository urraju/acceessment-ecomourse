import Banner from "../Layout/Banner";
import CardSection from "../Layout/CardSection";
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
             <CardSection/>
        </div>
    )}
export default Home;