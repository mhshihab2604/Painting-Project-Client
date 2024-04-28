import { Link } from "react-router-dom";

const AllArtCraftCard = ({painting}) => {
    const{ _id, item_name, image, subcategory_name, stock, price} = painting || {};
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col/>
                            <col/>
                            <col/>
                            <col/>
                            <col/>
                            <col className="w-24"/>
                        </colgroup>
                        <thead className="dark:bg-gradient-to-r from-[#03cdb5] to-[#C8143A] text-white">
                            <tr className="text-left">
                                <th className="p-3">Id</th>
                                <th className="p-3">Image</th>
                                <th className="p-3">Item Name</th>
                                <th className="p-3">Subcategory Name</th>
                                <th className="p-3">Stock</th>
                                <th className="p-3 text-right">Price</th>
                                <th className="p-3">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 dark:text-black font-medium">
                                <td className="p-3">
                                    <p>{_id}</p>
                                </td>
                                <td className="p-3">
                                    <img className="w-14 h-14 rounded-xl" src={image} alt="" />
                                </td>
                                <td className="p-3">
                                    <p>{item_name}</p>
                                </td>
                                <td className="p-3">
                                    <p>{subcategory_name}</p>
                                </td>
                                <td className="p-3">
                                    <p>{stock}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>{price}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <Link to={`/painting/${_id}`}><button className="btn text-white bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD]">View Details</button></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllArtCraftCard;