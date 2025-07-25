'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Slide } from '@src/types/Slide';
import '@styles/carousel.css';

import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';
import { mergeClass } from '@lib/utils/mergeClass';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';
import Icon from '@components/shared/Icon';

type CarouselProps = {
  id: string;
  label?: string;
  slides: Slide[];
  isNavigation?: boolean;
  isLoop?: boolean;
  autoplay?: boolean | AutoplayOptions;
  className?: string;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
};

export default function Carousel({
  id,
  label,
  slides,
  isNavigation = true,
  isLoop = true,
  autoplay = false,
  breakpoints = {
    340: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 8,
    },
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
  },
  className,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className='carousel-container flex flex-col gap-2 w-full mx-auto relative'>
      <div className='flex flex-row gap-2 items-end justify-between'>
        {label && (
          <h2 className='font-barlow text-primary-normal font-black uppercase italic text-[1.5em]/[1.5] md:text-[2em]/[1.5]'>{label}</h2>
        )}
        {isNavigation && (
          <div className='flex flex-row gap-2'>
            <button className={`swiper-button-control swiper-button-prev-${id} hover:cursor-pointer`}>
              <Icon name='arrow' width={8} height={15} />
            </button>
            <button className={`swiper-button-control swiper-button-next-${id} hover:cursor-pointer`}>
              <Icon name='arrow' width={8} height={15} className='transform rotate-180' />
            </button>
          </div>
        )}
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: `.swiper-button-prev-${id}`,
          nextEl: `.swiper-button-next-${id}`,
        }}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        loop={isLoop}
        breakpoints={breakpoints}
        className='w-full'
      >
        {slides?.map((item, idx) => (
          <SwiperSlide key={idx} onClick={() => setActiveIndex(idx)} className='carousel-slide'>
            <div className={mergeClass('relative w-full', activeIndex === idx && 'active', className)}>
              <Image
                src={item.image}
                alt={`NFT ${item.title}`}
                fill
                priority={idx === 0}
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw'
                className='object-cover rounded-xl'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
