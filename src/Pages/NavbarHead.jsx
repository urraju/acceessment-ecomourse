import { Link } from "react-router-dom";

const NavbarHead = () => {
  return (
    <div>
      <div className="bg-[#F0F1F1] ">
        <div className="max-w-screen-2xl font-inter py-2 items-center mx-auto flex justify-between px-2 md:px-0">
          <div className="flex gap-4">
            <div>
              <select className=" bg-transparent" name="language" id="">
                <option value="language">Language</option>
                <option value="english">English</option>
                <option value="bangla">Bangla</option>
                <option value="hindi">Hindi</option>
                <option value="cynis">Cynis</option>
              </select>
            </div>
            <h1>Help Center</h1>
            <h1>
              Helpline : <a href="">006693938</a>
            </h1>
          </div>
          {/* right site  */}

          <div className="flex gap-5">
            <h1>Become a Seller</h1>
            <h1>Order Track</h1>
            <p className="text-orange-500">
              <Link>Singup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarHead;
