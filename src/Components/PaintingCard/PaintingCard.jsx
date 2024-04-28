import { PiSquareLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const PaintingCard = ({painting}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const {_id,item_name, stock, price, rating, short_description, image} = painting || {};
    return (
        <div>
            <div className="card w-full h-full card-compact bg-base-100 shadow-xl border-2 rounded-lg p-4 space-y-2" data-aos="fade-up">
                <div>
                    <figure><img className="h-72 w-full" src={image} alt="Shoes"/></figure>
                </div>
                <div className="flex justify-around items-center  font-medium" data-aos="fade-up">
                        <h1 className="rounded-full bg-[#F3F3F3] p-2 font-medium">Rating:{rating}</h1>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl" data-aos="fade-up">{item_name}</h2>
                    <p className="text-[#131313CC] font-medium" data-aos="fade-up">{short_description}</p>
                </div>
                <hr className="border-dashed" />
                <div className="flex justify-between bg-[#F3F3F3] p-2 text-[#131313CC] font-semibold">
                    <p data-aos="fade-up">{price}$</p>
                    <p className="flex items-center gap-1" data-aos="fade-up"><PiSquareLogoBold></PiSquareLogoBold>{stock}</p>
                </div>
                <div>
                    <Link to={`/painting/${_id}`}>
                        <button className="btn w-full text-white bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD]">View Details</button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default PaintingCard;