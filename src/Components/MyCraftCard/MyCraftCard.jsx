import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({craft, crafts, setCrafts}) => {
    const {
        _id,item_name,stock,price,rating,image} = craft;
        const handleDelete = _id => {
            console.log(_id);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                
                fetch(`https://assignment-10-server-nine-nu.vercel.app/userCraft/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount > 0){
                            Swal.fire({
                            title: "Deleted!",
                            text: "Your craft has been deleted.",
                            icon: "success"
                            });
                            const remaining = crafts.filter(craf => craf._id !== _id);
                            setCrafts(remaining)
                        }
                    })
                }
            });
            
        }
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
                        <button onClick={() => handleDelete(_id)} className="btn text-white bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD]">Delete Craft</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraftCard;
