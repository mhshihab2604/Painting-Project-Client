import { Link } from "react-router-dom";

const MyCraftCard = ({craft}) => {
    const {
        _id,
        item_name,
        stock,
        price,
        rating,
        image
    } = craft;
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 border-2">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="mb-0 capitalize dark:text-gray-800">Photography</a>
                    </div>
                    <a rel="noopener noreferrer" href="#">See All</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img
                            src={image}
                            alt=""
                            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"/>
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-xl">{price}</span>
                            <span className="text-xl">{rating}</span>
                            <span className="text-xl">{stock}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{item_name}</h3>
                        </a>
                    </div>
                    <div className="flex justify-between items-center">
                        <Link to={`/updateCraft/${_id}`}><button className="btn text-white bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD]">Update Craft</button></Link>
                        <button className="btn text-white bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD]">Delete Craft</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftCard;
