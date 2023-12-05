import Footer from "../utils/Footer";
import Header from "../utils/Header";

const Cart = (props) => {
    return (
        <div>
            <Header page="cart" />
            <div className="flex w-full px-[30px] space-x-10 mb-[40px] mt-[20px]">
                <div className="w-[65%] space-y-5">
                    <div className="w-full shadow-lg px-[20px] py-[20px] flex justify-between">
                        <p className="text-[#6c757d] font-bold">LOGIN</p>
                    </div>
                    <div className="w-full shadow-lg px-[20px] py-[20px]">
                        <p className="text-[#6c757d] font-bold">ADDRESS</p>
                    </div>
                    <div className="w-full shadow-lg px-[20px] py-[20px]">
                        <p className="text-[#6c757d] font-bold">PAYMENT</p>
                    </div>
                </div>
                <div className="w-[35%] shadow-lg px-[20px] py-[20px]">
                    <p className="text-[#6c757d] font-bold">ORDER SUMMARY</p>
                    <hr />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;