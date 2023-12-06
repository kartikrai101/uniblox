import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
import {Link, useParams} from 'react-router-dom';
import Footer from '../utils/Footer';
import Header from '../utils/Header';

const product = {   
    id: "djlfnas",
    name: "Monitor",
    shortDescription: "Lenovo 31.5 inch Full HD",
    description: "Lenovo 31.5 inch Full HD VA Panel Monitor (D32-40)  (Response Time: 4 ms, 60 Hz Refresh Rate)",
    type: "electronics",
    imgUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/l/8/z/-original-imagtthycycfrpnf.jpeg?q=70",
    price: 14199,
    specs: [
        {
            key: "Model Name",
            value: "D32-40"
        },
        {
            key: "Color",
            value: "Black"
        },
        {
            key: "Display",
            value: "80.01 cm (31.5 inch) LED Display"
        },
        {
            key: "Panel Type",
            value: "VA Panel"
        },
        {
            key: "Screen Resolution Type",
            value: "Full HD"
        },
        {
            key: "Part Number",
            value: "66FCGAC2IN"
        },
        {
            key: "Sales Package",
            value: "1 Monitor, User Manual Guide, Warranty Card"
        },
        {
            key: "Screen Form Factor",
            value: "Flat"
        }
    ],
    rating: "4.3",
    reviews: "130",
    prevMonth: "2671",
    deliveredIn: "7",
}

const ProductDetails = (props) => {

    const [productDetails, setProductDetails] = useState({});
    const params = useParams();


    useEffect(() => {
        //fetch the id in parameter and get the product details
        const productId = params.id;
        const callback = async () => {
            const url = `http://localhost:8000/product/get/${params.id}`;
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            }

            const product = await axios.get(url, config);
            setProductDetails(product.data.body);
        }

        callback();
    }, [])

    return (
        <div>
            <Header page={"homepage"} />
            <div className='flex items-start w-full px-[40px] py-[30px] space-x-10'>
                <div className='w-[35%] rounded-[10px] border-grey border-[1px] p-[20px]'>
                    <img src={productDetails.imgUrl} className='' alt="item-image" />
                    <div className='w-full space-x-3 mt-[30px] flex items-center'>
                        <button className='bg-[#f3722c] flex justify-center items-center w-[50%] py-[10px] rounded-[5px] hover:shadow-xl'><p className='text-white font-medium'>Add to Cart</p></button>
                        <button className='bg-[#023e8a] flex justify-center items-center w-[50%] py-[10px] rounded-[5px] hover:shadow-xl'><p className='text-white font-medium'>Buy Now</p></button>
                    </div>
                </div>
                <div className='w-[65%] '>
                    <div className='rounded-[10px] border-grey border-[1px] p-[15px]'>
                        <p className='text-[20px] text-[#6c757d]'>{productDetails.name}</p>
                        <p className='text-[22px] font-medium'>{productDetails.description}</p>
                        <div className='flex items-center space-x-4 mt-[10px]'>
                            <p className='bg-[#bc6c25] text-white font-medium px-[10px] rounded-[5px]'>{productDetails.rating}</p>
                            <p className='text-[18px]'><span className='font-bold'>{productDetails.reviews}</span> Ratings & <span className='font-bold'>{productDetails.prevMonth}</span> users bought the product last month</p>
                        </div>
                        <p className='text-[#007200] font-medium mt-[10px]'>Special Price</p>
                        <p className='text-[32px] font-medium'>₹{productDetails.price}</p>
                        <p className='mt-[10px] text-[18px] font-medium'>Product Specifications</p>
                        <hr/>
                        <div className='mt-[10px]'>
                            <p>{productDetails.specs}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetails;