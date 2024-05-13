
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';



const Banner = () => {
  return (
    <div className=' container text-slate-100 mx-auto'>
      <Swiper
        effect={'cards'}
        // grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination]}
        // loop={true}

        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}


        className="mySwiper"
      >


        <SwiperSlide

        >

          <div
            className='min-h-screen flex flex-col justify-center items-center text-center text-slate-100'
            style={{ backgroundImage: 'url(https://i.ibb.co/VvRHzJG/room-banner-img.jpg)' }}

          >

            <div >
              <h1 className='text-6xl bona-nova-regular'>Suite Collection</h1>
              <p className="font-500">At our Roomly hotel, we understand that travelers have unique preferences and needs. <br /> That is why we offer a variety of thoughtfully designed airport room types.</p>
            </div>


          </div>

        </SwiperSlide>



        <SwiperSlide>

          <div
            className='min-h-screen bg-center  bg-cover bg-no-repeat flex flex-col justify-center items-center text-center text-slate-100'
            style={{ backgroundImage: 'url(https://i.ibb.co/wdqCS8X/banner1-2.jpg)' }}

          >
            <h1 className='text-6xl text-center'> This is Room</h1>
          </div>
        </SwiperSlide>


        <SwiperSlide>

          <div
            className='min-h-screen bg-center  bg-cover bg-no-repeat flex flex-col justify-center items-center text-center text-base'
            style={{ backgroundImage: 'url(https://i.ibb.co/hZN8FfC/banner3-2.jpg)' }}

          >
           <div>
           <h1 className='text-6xl bona-nova-regular'>Tranquil Retreat, Unwind in Serene Surroundings</h1>
           <p className="font-500 mt-2">Escape the hustle and bustle of everyday life and discover a tranquil retreat at Roomly Hotel. <br />Nestled amidst serene surroundings, our hotel rooms provide a peaceful oasis where you can relax and rejuvenate.</p>
           </div>

          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div
            className='min-h-screen bg-center  bg-cover bg-no-repeat'
            style={{ backgroundImage: 'url(https://i.ibb.co/XxcRmqx/banner2-2.jpg)' }}

          >
            <h1 className='text-6xl text-center'> This is Room</h1>
          </div>
        </SwiperSlide>



      </Swiper>


    </div>




  );
};

export default Banner;