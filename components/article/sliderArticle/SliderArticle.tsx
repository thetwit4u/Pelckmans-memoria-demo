import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, SwiperOptions } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Modal from '../../modal/Modal';
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
  const [showModal, setShowModal] = React.useState(false);
  const [slideIndex, setSlideIndex] = React.useState(0);

  React.useEffect(() => {
    if (showModal) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [showModal]);

  return (
    <section className='p-6'>
      <Swiper {...SwiperParams} className='group' onRealIndexChange={swiper => setSlideIndex(swiper.realIndex)}>
        {src.map(image => {
          return (
            <SwiperSlide key={image.id} className='relative image-container'>
              <Image alt={image.alt} className='image-item' layout='fill' src={image.src} />

              {image.caption && (
                <>
                  <p className='hidden lg:block absolute right-0 bottom-0 left-0 p-2 text-xs text-white bg-black opacity-80'>
                    <span className='opacity-100'>{image.caption}</span>
                  </p>
                  <button
                    className='block lg:hidden absolute right-0 bottom-0 left-0 p-2 w-full text-xs text-white bg-black opacity-80'
                    onClick={() => setShowModal(true)}>
                    Meer Informatie
                  </button>
                </>
              )}
            </SwiperSlide>
          );
        })}

        <button className='absolute top-1/2 left-0 z-50 p-3 bg-black opacity-80 group-hover:opacity-40 transition-transform group-hover:translate-x-4 prev-button translate-y-[-50%] hover:!opacity-80'>
          <FaChevronLeft className='text-white' />
        </button>
        <button className='absolute top-1/2 right-0 z-50 p-3 bg-black opacity-80 group-hover:opacity-40 transition-transform group-hover:-translate-x-4 prev-button translate-y-[-50%] hover:!opacity-80'>
          <FaChevronRight className='text-white' />
        </button>
      </Swiper>

      {showModal && (
        <Modal headerTitle='Test' onClose={() => setShowModal(false)}>
          {src[slideIndex].caption}
        </Modal>
      )}
    </section>
  );
};

export default SliderArticle;
