import Banner2 from "../Components/MobileVersion/Banner2";
import CardCollection from "../Components/MobileVersion/CardCollection";
import Collection2 from "../Components/MobileVersion/Collection2";
import CollectionCard from "../Components/MobileVersion/CollectionCard";
import Menu from "../Components/MobileVersion/Menu";
import Banner from "../Layout/Banner";
import CardSection from "../Layout/CardSection";
import Collection from "../Layout/Collection";
import Navbar from "../Layout/Navbar";
import NavbarHead from "./NavbarHead";

const Home = () => {
    return(
        <div>
            <div className="hidden lg:block">
             <NavbarHead/>
             <Navbar/>
             <Banner/>
             <Collection/>
             <CardSection/>
            </div>
           <div className="block md:hidden">
           <Menu/>
            <Banner2/>
            <Collection2/>
            <CardCollection/>
           </div>
             
        </div>
    )}
export default Home;