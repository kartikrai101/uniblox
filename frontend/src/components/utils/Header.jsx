import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="w-full border-[2px] border-grey px-[30px] bg-white py-[15px] flex items-center justify-between">
            <Link to={'/'}><div className=" flex items-center space-x-3 hover:cursor-pointer">
                <img src="/assets/Logo.png" alt="logo" className="w-[45px] h-[45px]" />
                <div className="space-y-[-10px]">
                    <p className="text-[32px] font-medium">UniShop</p>
                    <p className="italic">Get rewards on your shopping</p>
                </div>
            </div></Link>
            <div className="space-x-10 ">
                <button className=" border-[1px] border-[#004e98] text-[#004e98] font-medium px-[13px] py-[7px] rounded-[5px] hover:shadow-xl">Sign In</button>
                <button className="bg-[#004e98] text-white font-medium px-[13px] py-[7px] rounded-[5px] hover:shadow-xl">Sign Up</button>
            </div>
        </div>
    );
}

export default Header;