import { IoIosCall } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <div className='mt-40 mx-auto pb-10'>
                <Marquee speed={100}>
                    <div className="flex justify-center gap-20">
                        <img className="w-[250px] h-[200px] " src="https://m.media-amazon.com/images/I/91ecnaKECdL.jpg" alt="" />
                        <img className="w-[250px] h-[200px]" src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" alt="" />
                        <img className="w-[250px] h-[200px]" src="https://static.skillshare.com/uploads/project/462615/cover_full_5c88fd9328732fc40f60bbf2fe7bdd56.jpg" alt="" />
                        <img className="w-[250px] h-[200px]" src="https://www.artsindia.com/cdn/shop/products/Jayden_india_gate_black_and_white_illustration_clean_white_back_827759a0-381f-4b0a-9927-d49a116183ec.png?v=1676272753" alt="" />
                        <img className="w-[250px] h-[200px]" src="https://img.freepik.com/premium-vector/modern-abstract-art-watercolor-floral-illustration-golden-elements-watercolor-painting-children_899391-2134.jpg" alt="" />
                    </div>
                </Marquee>
            </div>
            <footer className="bg-base-200 p-10 ">
                <div className="footer items-center max-w-7xl mx-auto">
                    <aside className="space-y-4">
                        <p>Contact us</p>
                        <h1 className="text-2xl">Get in Touch</h1>
                        <div>
                            <h1 className="flex items-center gap-2">
                                <IoIosCall className="text-[#D1AF4B]"></IoIosCall>Call us 1-800-555-1234</h1>
                            <h1 className="flex items-center gap-2">
                                <BiSolidMessage className="text-[#D1AF4B]"></BiSolidMessage>info@example.com</h1>
                            <h1 className="flex items-center gap-2">
                                <GoClockFill className="text-[#D1AF4B]"></GoClockFill>Open House on the 24th, - 12 mid day to 5 pm.</h1>
                        </div>
                        <button className="bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD] p-4 text-white">Schedule A Visit</button>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Component</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">All Art&Craft</a>
                        <a className="link link-hover">My Art&Craft</a>
                        <a className="link link-hover">Add Craft</a>
                        <a className="link link-hover">Login</a>
                        <a className="link link-hover">Register</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">
                            APPS</h6>
                        <a className="link link-hover">Mac</a>
                        <a className="link link-hover">Windows</a>
                        <a className="link link-hover">iPhone</a>
                        <a className="link link-hover">Android</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">MANAGEMENT</h6>
                        <Link to="/painting-business" className="link link-hover">painting business</Link>
                        <Link to="/estate-window" className="link link-hover">Estate Window</Link>
                        <Link to="/estate-iphone" className="link link-hover">Estate Iphone</Link>
                        <Link to="/estate-android" className="link link-hover">Estate Android</Link>

                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-gradient-to-r from-[#03cdb5] to-[#C8143A]  text-base-content">
                <aside>
                    <p className="text-white">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
    </div>
    );
};

export default Footer;