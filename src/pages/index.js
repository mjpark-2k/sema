'use client'

import React, { useState} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Link from 'next/link';
import useStore from '@/state/store';

import exhibition from './exhibition'
import Content from './content';
import { useRouter } from 'next/router';
import Collection from './collection';

const Home = () => {
  let navigator = useRouter();
  const {dataSave,data} = useStore()
  const dp_day = data.exhibition.filter((day) => new Date(day.DP_END) > new Date())
  const exhibition = data.exhibition.sort((a, b) => new Date(a.DP_START) - new Date(b.DP_START)).reverse();
  const education = data.education.sort((a, b) => new Date(a.APP_OPEN) - new Date(b.APP_OPEN)).reverse();

  return (
    <div className="art">
      <div className="home">
        <Swiper 
          autoplay={{delay: 4000, disableOnInteraction: false,}} 
          loop={true} 
          pagination={{
            type: 'fraction',
          }}
          modules={ [Autoplay,Pagination] }
          className="mySwiper">
            {
              dp_day.map((dp,n)=>
                (n<5) ? (
                  <SwiperSlide key={dp.DP_EX_NO}>
                    <div className='main'>
                      <figure onClick={()=>navigator.push(`content?id=${dp.DP_EX_NO}`)}><img src={dp.DP_MAIN_IMG}/></figure>
                      <p>{dp.DP_NAME}</p>
                    </div>
                  </SwiperSlide>
                ) : ''
              )
            }
        </Swiper>


        <div className="t-slide">
          <Link href='/exhibition'><h4>전시</h4></Link>
          <Swiper 
            loop={true} 
            slidesPerView={3}
            modules={[Pagination]}
            spaceBetween={5}
            className="mySwiper">
              {
                exhibition.map((obj,k)=>
                  (k<20) ? (
                    <SwiperSlide key={k}>
                      <figure onClick={()=>navigator.push(`content?id=${obj.DP_EX_NO}`)}>
                        <img src={obj.DP_MAIN_IMG}/>
                      </figure>
                    </SwiperSlide>
                  ) : ''
                )
              }
          </Swiper>
        </div>
        <div className="t-slide">
          <Link href='/education'><h4>프로그램</h4></Link>
          <Swiper 
            loop={true} 
            slidesPerView={3}
            modules={[Pagination]}
            spaceBetween={5}
            className="mySwiper">
              {
                education.map((obj,k)=>
                  (k<20) ? (
                    <SwiperSlide key={k}>
                      <figure onClick={()=>navigator.push(`content?id=${obj.ACADMY_NO}`)}>
                        <img src={obj.EDU_IMG}/>
                      </figure>
                    </SwiperSlide>
                  ) : ''
                )
              }
          </Swiper>
        </div>

        <div className="t-slide">
          <Link href='/collection'><h4>소장품</h4></Link>
          <Swiper 
            loop={true} 
            slidesPerView={3}
            modules={[Pagination]}
            spaceBetween={5}
            className="mySwiper">
              {
                data?.collection.map((a,b)=>
                  (b<20) ? (
                    <SwiperSlide key={b}>
                      <figure onClick={()=>navigator.push(`content?id=${a.prdct_nm_korean}`)}>
                        <img src={a.thumb_image}/>
                      </figure>
                    </SwiperSlide>
                  ) : ''
                )
              }
            </Swiper>
        </div>
      </div>
    </div>
  )
}



export default Home

