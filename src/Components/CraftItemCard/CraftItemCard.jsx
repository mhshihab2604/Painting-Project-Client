import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const CraftItemCard = ({painting}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const {_id, item_name, short_description, image} = painting || {};
    return (
        <div>
            <div
                className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 border-2" data-aos="fade-up">
                <img
                    src={image}
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/>
                <div className="flex flex-col justify-between p-6 space-y-2">
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold" data-aos="fade-up">{item_name}</h2>
                        <small><p className="dark:text-gray-800" data-aos="fade-up">{short_description}</p></small>
                    </div>
                    <div>
                    <Link to={`/painting/${_id}`}>
                        <button className="btn w-full text-white bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD]" data-aos="fade-up">View Details</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItemCard;