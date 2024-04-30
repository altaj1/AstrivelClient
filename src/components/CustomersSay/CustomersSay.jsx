import {  Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FcBusinesswoman } from "react-icons/fc";


const CustomersSay = () => {
  return (
    <Swiper
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
        <div className="w-[65%] mx-auto  shadow-lg rounded-lg lg:p-12 md:p-12 text-start mb-10">
            <p className=""> 
            Just wanted to let you know that the trip was fantastic and everything worked out seamlessly! The hotels and the tours you recommended were excellent! Hotel locations in particular were ideal. Alessio came through as promised with the Christmas Eve mass tickets, and that experience was very special for us. Also, the Trip Plan app made things very easy for us. It was nice that we could all check out the daily plan at any time, and be able to pull up all the vouchers and tickets. -Margie K.
            </p>
            <h1 className="text-3xl flex gap-2 items-center font-bold"> <span><FcBusinesswoman /></span>  Parents Trip to Alaska</h1>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="w-[65%] mx-auto  shadow-lg rounded-lg lg:p-12 md:p-12 text-start mb-10">
            <p className=""> 
            Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance before we left on what to bring and such, that was very helpful! Thanks again, Meg S.
            </p>
            <h1 className="text-3xl flex gap-2 items-center font-bold"> <span><FcBusinesswoman /></span> Meg S.</h1>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="w-[65%] mx-auto  shadow-lg rounded-lg lg:p-12 md:p-12 text-start mb-10">
            <p className=""> 
            Amber, Hi. We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. It was perfect for not being crowded on the beach w/ Covid concerns. The beach is for guests only & beautiful!....Thanks so much for finding the perfect spot for us for spring break
            </p>
            <h1 className="text-3xl flex gap-2 items-center font-bold"> <span><FcBusinesswoman /></span> Stephanie</h1>
        </div>
    </SwiperSlide>
    
  </Swiper>
  );
};

export default CustomersSay;
