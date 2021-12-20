import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../watchArticle/styles.module.scss';
import Image from 'next/image';

import { EffectFade, Navigation, SwiperOptions } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

const GalleryArticle = (): JSX.Element => {
  return (
    <section className='col-span-4'>
      <Swiper {...SwiperParams} className='group'>
        <SwiperSlide className={`${styles['image-container']} relative`}>
          <Image
            alt='test'
            className={styles['image-item']}
            layout='fill'
            src='https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/529876_9779_mem2_ict_04_cultuur_011-e1600081703586.jpg'
          />

          {/* caption */}
          <p className='absolute bottom-0 p-2 text-xs text-white bg-black opacity-80'>
            <span className='opacity-100'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi corporis cupiditate eaque enim eos
              exercitationem fugiat in ipsam itaque libero magnam officiis omnis possimus reprehenderit sit ut vero,
              voluptatibus!
            </span>
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles['image-container']}>
          <Image
            alt='test'
            className={styles['image-item']}
            layout='fill'
            src='https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/529876_9779_mem2_ict_04_cultuur_012-e1600081611564.jpg'
          />
        </SwiperSlide>

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

export default GalleryArticle;
