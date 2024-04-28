import "./WhyChoose.css";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import { RiPaintFill } from "react-icons/ri";

const WhyChoose = () => {
    return (
        <div className="chooseUsConc mt-32">
            <div>
                <h1 className="chooseHeading text-3xl lg:text-5xl font-bold  text-center mx-auto">Why Choose Our Masterpieces</h1>
            </div>

            <div className="ourContent mt-16">
                <div className="leftSide">
                    <h1>We Provide The Best Artistry</h1>
                    <p>We redefine the art-buying experience with an exceptional blend of variety,
                        quality, and transparency. Our curated selection ensures you find the perfect
                        artwork, backed by rigorous quality checks and fair pricing</p>
                    <img className="w-[600px]" src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" alt=""/>
                </div>
                <div className="rightSide">
                    <div className="myCard">
                        <FaCircleHalfStroke className="myIcon"/>
                        <div className="cardBottom">
                            <h1>Broad Spectrum of Colors</h1>
                            <p>Discover a wide array of meticulously crafted paintings, ensuring you find the perfect
                                match for your artistic palette and preferences.</p>
                        </div>
                    </div>

                    <div className="myCard">
                        <FaHandshake className="myIcon"/>
                        <div className="cardBottom">
                            <h1>Artistic Integrity</h1>
                            <p>
                                Our masterpieces undergo meticulous examination and care, ensuring that each piece embodies
                                the utmost standards of quality and artistic integrity.</p>
                        </div>
                    </div>

                    <div className="myCard">
                        <FaCircleHalfStroke className="myIcon"/>
                        <div className="cardBottom">
                            <h1>Investment Opportunities</h1>
                            <p>We provide flexible investment solutions tailored to your financial preferences, making your
                                dream of owning exquisite artworks more attainable than ever.</p>
                        </div>
                    </div>

                    <div className="myCard">
                        <RiPaintFill className="myIcon"/>
                        <div className="cardBottom">
                            <h1>Reputable Artisans</h1>
                            <p>Join a community of satisfied patrons who have entrusted us with their artistic aspirations. 
                                Our esteemed reputation is founded on the bedrock of trust and excellence.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WhyChoose;
