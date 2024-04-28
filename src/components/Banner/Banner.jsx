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
              <h1 className='font-semibold '> Iconic for its tropical beauty, cultural richness, and warm hospitality. From sacred temples to pristine beaches, it offers a captivating blend of tradition and natural splendor for every traveler.</h1>
              <button className="btn lg:btn-ghost lg:btn-outline w-36">Explore Now</button>
              </div>
              <div className='flex lg:items-end justify-center md:pl-10 lg:p-48  lg:pr-28' >
              <img className='rounded-lg' src={"https://i.ibb.co/FVNgqh2/Angkor-Wat.jpg"} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/FJmYDpG/Temple.jpg')]  bg-no-repeat bg-cover " >
          <div className=';g:h-[600px] lg:p-11 text-slate-200'>
            <div className='lg:flex md:flex'>
              <div className='w-[50%] gap-8 flex flex-col items-start text-start justify-center p-16'>
              <h1 className='text-6xl font-bold'>Welcome  Temple</h1>
              <h1 className='font-semibold '>
Chiang Mai's temples enchant with their intricate architecture, serene courtyards, and profound spirituality, offering a glimpse into Thailand's cultural heritage and providing peaceful sanctuaries amidst the bustling cityscape.</h1>
              <button className="btn lg:btn-ghost lg:btn-outline w-36">Explore Now</button>
              </div>
              <div className='flex lg:items-end justify-center md:pl-10 lg:p-48  lg:pr-28' >
              <img className='rounded-lg' src={"https://i.ibb.co/FJmYDpG/Temple.jpg"} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/PCXn54c/cox-bz.jpg')]  bg-no-repeat bg-cover " >
          <div className=';g:h-[600px] lg:p-11 text-slate-200'>
            <div className='lg:flex md:flex'>
              <div className='w-[50%] gap-8 flex flex-col items-start text-start justify-center p-16'>
              <h1 className='text-6xl font-bold'>Welcome  Temple</h1>
              <h1 className='font-semibold '>
              Bangladesh's coastal gem boasting the world's longest natural sandy beach. Its tranquil shores, bustling markets, and vibrant culture make it a captivating destination for beach lovers and adventurers alike.</h1>
              <button className="btn lg:btn-ghost lg:btn-outline w-36">Explore Now</button>
              </div>
              <div className='flex lg:items-end justify-center md:pl-10 lg:p-48  lg:pr-28' >
              <img className='rounded-lg' src={"https://i.ibb.co/PCXn54c/cox-bz.jpg"} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
    );
};

export default Banner;