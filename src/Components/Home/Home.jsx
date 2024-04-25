import {useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
const Home = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselImages = ['https://i.ibb.co/8cX0d6v/assign1.jpg','https://i.ibb.co/LNSzLND/assign2.jpg','https://i.ibb.co/mNTV8Rw/assign4.jpg','https://i.ibb.co/2s4dv5k/assign5.jpg'];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

   
    useEffect(() => {
        const intervalId = setInterval(() => {
        nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);
  
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                        <h1 className="text-5xl font-extrabold dark:text-gray-900">Change</h1>
                        <h1 className="text-5xl font-extrabold dark:text-gray-900 text-center">The Way <span className='text-7xl'>You</span></h1>
                        <h1 className="text-5xl font-extrabold dark:text-gray-900 text-right">Change The World</h1>
                        <p className="my-8">Nafshi where artistic elegance meets seamless customization, like brushstrokes on canvas. A haven for both seasoned artists and novices, offering myriad features to craft unique masterpieces.
                        </p>
                    </div>
                    {/* <img src="https://i.ibb.co/hKTPKyd/vu-anh-Ti-VPTYCG-3-E-unsplash.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" /> */}
                    <div>
                        <div className="h-60 w-full lg:w-[700px] md:h-[470px] lg:h-[540px] relative overflow-hidden">
                            {/* arrow left */}
                            <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                            </button>
                            {/* arrow right */}
                            <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                            </button>
                            {/* dots */}
                            <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                            {carouselImages.map((_, inx) => (
                                <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
                            ))}
                            </div>
                            {/* Carousel container */}
                            <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
                            {/* sliders */}
                            {carouselImages.map((slide, inx) => (
                                <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`}/>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;