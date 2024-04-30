
import { useEffect, useState } from "react";
import useAuth from "../UseAuth/useAuth";
import MyCraftCard from "../MyCraftCard/MyCraftCard";
import { Helmet } from 'react-helmet';
const MyCraftList = () => {
  const { user } = useAuth();
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-10-server-nine-nu.vercel.app/userCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCrafts(data);
        } else if (data && typeof data === "object") {
          setCrafts([data]);
        } else {
          console.error("Data fetched is neither an array nor an object:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user.email]);
  console.log(crafts);

  return (
    <div>
      <Helmet>
          <title>My Craft&Arts</title>
      </Helmet>
      <section className="mt-12 mx-6">
        <h2 className="text-3xl lg:text-5xl font-bold  text-center">
          My Art&Craft
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9 mx-auto container">
          {crafts.map((craft) => (
            <MyCraftCard key={craft.email} crafts={crafts} setCrafts={setCrafts} craft={craft} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyCraftList;
