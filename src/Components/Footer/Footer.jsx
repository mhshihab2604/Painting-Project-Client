import { IoIosCall } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
const Footer = () => {
    return (
        <div>
            <footer className="p-10 bg-[#003733] text-white">
                <div className="footer items-center max-w-7xl mx-auto">
                    <aside className="space-y-4">
                        <p>Contact us</p>
                        <h1 className="text-2xl">Get in Touch</h1>
                        <p>Nafshi Real Estate brings wide range of choice,steadily updated
                            <br/>property list and market trend for you to figure out your right
                            <br/>decision.It is a premium WordPress theme for real estate where
                            <br/>
                            modern aesthetics are combined with tasteful simplicity.</p>
                        <div>
                            <h1 className="flex items-center gap-2">
                                <IoIosCall className="text-[#D1AF4B]"></IoIosCall>Call us 1-800-555-1234</h1>
                            <h1 className="flex items-center gap-2">
                                <BiSolidMessage className="text-[#D1AF4B]"></BiSolidMessage>info@example.com</h1>
                            <h1 className="flex items-center gap-2">
                                <GoClockFill className="text-[#D1AF4B]"></GoClockFill>Open House on the 24th, - 12 mid day to 5 pm.</h1>
                        </div>
                        <button className="bg-[#93BB57] p-4 text-white">Schedule A Visit</button>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">All Properties</a>
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
                        <a className="link link-hover">Estate business</a>
                        <a className="link link-hover">Estate Window</a>
                        <a className="link link-hover">Estate Iphone</a>
                        <a className="link link-hover">Estate Android</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-[#93BB57] text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
    </div>
    );
};

export default Footer;