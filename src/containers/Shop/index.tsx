import * as React from "react";
import Card from "../../components/Card";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";

const DATA = [
    {
        img: "/images/non_plus.png",
        name: "NON PLUS ULTRA",
        aroma: "100",
        intensity: "70",
        description: "A blend of the most precious, select single varietals of 100% natural washed Arabica coffee.",
        link: "https://www.dersut.ae/products/non-plus-ultra",
    }, {
        img: "/images/oro.png",
        name: "ORO",
        aroma: "90",
        intensity: "90",
        description: "A perfect morning blend, harmonious yet rich in body and flavour. Its aroma brings floral, fruity notes.",
        link: "https://www.dersut.ae/products/oro",
    }, {
        img: "/images/santos.png",
        name: "SANTOS SINGLE-ORIGIN COFFEE",
        aroma: "90",
        intensity: "80",
        description: "A perfect after-lunch coffee with a smooth, full aroma, leading into a chocolate aftertaste.",
        link: "https://www.dersut.ae/products/santos-single-origin-coffee",
    }, {
        img: "/images/blu.png",
        name: "BLU",
        aroma: "85",
        intensity: "90",
        description: "Full body and rounded intensity, with pleasant cocoa notes.",
        link: "https://www.dersut.ae/products/blu",
    }, {
        img: "/images/limu.png",
        name: "LIMU SINGLE-ORIGIN COFFEE",
        aroma: "100",
        intensity: "85",
        description: "Bitterness, acidity and sweetness with its jasmine and citrus notes.",
        link: "https://www.dersut.ae/products/limu-single-origin-coffee",
    }, {
        img: "/images/decalight.png",
        name: "DECALIGHT",
        aroma: "70",
        intensity: "30",
        description: "Full-flavoured, high digestibility dewaxed decaffeinated coffee.",
        link: "https://www.dersut.ae/products/decalight-coffee-beans-waxed",
    }
]

const Shop: React.FC = () => {
    // install Swiper modules
    SwiperCore.use([Navigation, Pagination]);

    return (
        <section id="shop" className="m-auto mt-20 w-11/12 max-w-default lg:w-4/5">
            <div className="overflow-x-hidden pt-8">
                <h1 className="pb-12 font-minion text-5xl font-bold lg:text-title">
                    Shop Dersut
                </h1>
                <p className="z-10 w-full font-nexa text-lg lg:w-8/12 mb-36">We have had a passion for quality coffee
                    and
                    offering you an outstanding coffee experience: gourmet and tasty coffees with top quality Dersut
                    coffee
                    beans.
                </p>

                <Swiper
                    style={{overflow: "visible"}}
                    loop={true}
                    initialSlide={1}
                    slidesPerView={3}
                    centeredSlides={true}
                    navigation={true}
                    pagination={true}
                    slideToClickedSlide={true}
                    autoplay={{delay: 4000}}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper mb-20"
                >

                    {DATA.map((item, idx) => <SwiperSlide key={item.name}>
                            {({isActive}) => (
                                <Card
                                    id={idx}
                                    active={isActive ? idx : -1}
                                    {...item}
                                />
                            )}</SwiperSlide>
                            )}
                </Swiper>
            </div>
        </section>
    );
};

    export default Shop;
