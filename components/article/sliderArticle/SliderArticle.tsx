import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, SwiperOptions } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SliderArticleProps } from './types';

const SwiperParams: SwiperOptions = {
  loop: true,
  navigation: {
    prevEl: '.prev-button',
    nextEl: '.next-button'
  },
  effect: 'fade',
  modules: [Navigation, EffectFade],
  slidesPerView: 1
};

const SliderArticle = ({ src }: SliderArticleProps): JSX.Element => {
  return (
    <section className='p-6'>
      <Swiper {...SwiperParams} className='group'>
        {src.map(image => {
          return (
            <SwiperSlide key={image.id} className='relative image-container'>
              <Image alt={image.alt} className='image-item' layout='fill' src={image.src} />

              {image.caption && (
                <p className='absolute right-0 bottom-0 left-0 p-2 text-xs text-white bg-black opacity-80'>
                  <span className='opacity-100'>{image.caption}</span>
                </p>
              )}
            </SwiperSlide>
          );
        })}

        {/* navigation */}
        <button className='absolute top-1/2 left-0 z-50 p-3 bg-black opacity-80 group-hover:opacity-40 transition-transform group-hover:translate-x-4 prev-button translate-y-[-50%] hover:!opacity-80'>
          <FaChevronLeft className='text-white' />
        </button>
        <button className='absolute top-1/2 right-0 z-50 p-3 bg-black opacity-80 group-hover:opacity-40 transition-transform group-hover:-translate-x-4 prev-button translate-y-[-50%] hover:!opacity-80'>
          <FaChevronRight className='text-white' />
        </button>
      </Swiper>
    </section>
  );
};

export default SliderArticle;
