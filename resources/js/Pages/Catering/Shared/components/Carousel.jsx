import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Carousel() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper carousel relative container mx-auto"
                style={{ maxWidth: "1600px", height: "50vh" }}
            >
                <SwiperSlide
                    className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                    style={{
                        backgroundImage: `url(/storage/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg)`,
                    }}
                >
                    <div className="container mx-auto">
                        <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                            <p className="text-white text-2xl my-4">Something fresh and healthy</p>
                            {/* <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                    style={{
                        backgroundImage: `url(/storage/images/lily-banse--YHSwy6uqvk-unsplash.jpg)`,
                    }}
                >
                   <div className="container mx-auto">
                        <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                            <p className="text-white text-2xl my-4">Delicious mix, can't complain</p>
                            {/* <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                    style={{
                        backgroundImage: `url(/storage/images/victoria-shes-UC0HZdUitWY-unsplash.jpg)`,
                    }}
                >
                    <div className="container mx-auto">
                        <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                            <p className="text-white text-2xl my-4">Face it, it's irresistible.</p>
                            {/* <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a> */}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
