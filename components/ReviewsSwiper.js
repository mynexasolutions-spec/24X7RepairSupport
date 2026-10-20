'use client';

import { useEffect, useRef } from 'react';

const reviews = [
  {
    stars: 5,
    text: '"Excellent service! The technician arrived on time and fixed my refrigerator within an hour. Highly professional and the price was very reasonable."',
    initials: 'RA',
    name: 'Rahul A.',
    service: 'Refrigerator Repair',
  },
  {
    stars: 5,
    text: '"I called them for my washing machine issue. They quickly identified the problem and replaced the genuine part. Very satisfied with the prompt response."',
    initials: 'SM',
    name: 'Sneha M.',
    service: 'Washing Machine Repair',
  },
  {
    stars: 5,
    text: '"Great experience with Home Care AC & Appliance Service Center. The technician was punctual, knowledgeable, and repaired our Split AC and appliances with genuine spare parts. Highly recommended!"',
    initials: 'VK',
    name: 'Vikram K.',
    service: 'AC & Appliance Repair',
  },
  {
    stars: 5,
    text: '"They fixed my AC just before summer really kicked in! The mechanic was super friendly and explained the whole issue to me. 5/5 stars."',
    initials: 'AR',
    name: 'Amit R.',
    service: 'AC Repair',
  },
  {
    stars: 4.5,
    text: '"Very transparent pricing. No hidden charges whatsoever. They quoted an amount before starting and stuck to it. Truly professional."',
    initials: 'PS',
    name: 'Priya S.',
    service: 'Microwave Repair',
  },
  {
    stars: 5,
    text: '"Booked a service online and they came within 2 hours. Extremely prompt service and the parts used are genuine. My fridge works like new!"',
    initials: 'MK',
    name: 'Mohit K.',
    service: 'Refrigerator Repair',
  },
];

function StarRating({ stars }) {
  const fullStars = Math.floor(stars);
  const hasHalf = stars % 1 !== 0;
  return (
    <div className="stars">
      {Array.from({ length: fullStars }).map((_, i) => (
        <i key={i} className="fa-solid fa-star"></i>
      ))}
      {hasHalf && <i className="fa-solid fa-star-half-stroke"></i>}
    </div>
  );
}

export default function ReviewsSwiper() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Dynamically load Swiper
    const loadSwiper = async () => {
      const { default: Swiper } = await import('swiper');
      const { Navigation, Autoplay } = await import('swiper/modules');
      await import('swiper/css');
      await import('swiper/css/navigation');

      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          modules: [Navigation, Autoplay],
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
      }
    };
    loadSwiper();
  }, []);

  return (
    <div className="swiper reviews-swiper" ref={swiperRef}>
      <div className="swiper-wrapper">
        {reviews.map((review, idx) => (
          <div className="swiper-slide" key={idx}>
            <div className="review-card">
              <StarRating stars={review.stars} />
              <p className="review-text">{review.text}</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{review.initials}</div>
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.service}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper Navigation */}
      <div className="swiper-button-next custom-swiper-btn"></div>
      <div className="swiper-button-prev custom-swiper-btn"></div>
    </div>
  );
}
