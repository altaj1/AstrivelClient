import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Banner = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[url('https://i.ibb.co/FVNgqh2/Angkor-Wat.jpg')]  bg-no-repeat bg-cover " >
          <div className=';g:h-[600px] lg:p-11 text-slate-200'>
            <div className='lg:flex md:flex'>
              <div className='w-[50%] gap-8 flex flex-col items-start text-start justify-center p-16'>
              <h1 className='text-6xl font-bold'>Welcome  Astrovel</h1>
              <h1 className='font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis nostrum explicabo consequatur itaque qui magni earum quo laudantium, cupiditate exercitationem tempore a voluptate nisi quisquam dolore expedita eaque eos!</h1>
              <button className="btn lg:btn-ghost lg:btn-outline w-36">Explore Now</button>
              </div>
              <div className='flex lg:items-end justify-center md:pl-10 lg:p-48  lg:pr-28' >
              <img className='rounded-lg' src={"https://i.ibb.co/FVNgqh2/Angkor-Wat.jpg"} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="bg-[url('https://i.ibb.co/Fz4jjSy/Vietnam.jpg')] h-96 bg-no-repeat bg-cover           ">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/KGnKFj3/Bali.jpg')] h-96 bg-no-repeat bg-cover               ">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/CWm0YpQ/cox-s-bazar.jpg')] h-96 bg-no-repeat bg-cover      ">Slide 4</SwiperSlide> */}
        
      </Swiper>
    </>
    );
};

export default Banner;