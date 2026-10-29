'use client';

import { useEffect, useRef } from 'react';

const reviews = [
  {
    stars: 5,
    text: '"My Daikin Split AC completely stopped cooling during peak Hyderabad heat. 24x7 Repair Support dispatched a technician in 40 minutes. He performed nitrogen leak testing, refilled R32 gas, and ice-cold cooling was restored 100%!"',
    initials: 'RA',
    name: 'Rahul A.',
    service: 'Split AC Gas Charging & Leak Fix',
  },
  {
    stars: 5,
    text: '"Booked their AC Jet Foam Wash for ₹249. The technician used a proper high-pressure water jet and catch bag, cleaned all mold from the blower wheel. AC air feels so crisp and cooling dropped to 18°C in minutes!"',
    initials: 'SM',
    name: 'Sneha M.',
    service: 'AC Jet Foam Wash & Deep Clean',
  },
  {
    stars: 5,
    text: '"Great experience with 24x7 Repair Support. The technician was punctual, knowledgeable, and diagnosed our Inverter AC PCB board error E6 on the spot. Replaced genuine sensors in Hyderabad!"',
    initials: 'VK',
    name: 'Vikram K.',
    service: 'Inverter AC PCB Board Repair',
  },
  {
    stars: 5,
    text: '"They installed our new 2-ton Split AC in Ameerpet. Precision wall mounting, vacuum testing, and zero mess left behind. The technician was super friendly and explained operation clearly. 5/5 stars!"',
    initials: 'AR',
    name: 'Amit R.',
    service: 'Split AC Installation & Fitting',
  },
  {
    stars: 5,
    text: '"Very transparent pricing. No hidden charges whatsoever. They provided a free doorstep inspection, gave upfront repair quotation, and restored cooling on the same day. Truly professional AC service."',
    initials: 'PS',
    name: 'Priya S.',
    service: 'AC Cooling Breakdown Repair',
  },
  {
    stars: 5,
    text: '"Our office AC was leaking water continuously on the wall. Called their 24x7 helpline and technician arrived within an hour, unclogged the drain line and cleaned the cooling coils. Highly recommended in Hyderabad!"',
    initials: 'MK',
    name: 'Mohit K.',
    service: 'AC Water Leakage Service',
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
    let swiperInstance = null;

    // Dynamically load Swiper
    const loadSwiper = async () => {
      const { default: Swiper } = await import('swiper');
      const { Navigation, Autoplay, Pagination } = await import('swiper/modules');
      await import('swiper/css');
      await import('swiper/css/navigation');
      await import('swiper/css/pagination');

      if (swiperRef.current) {
        swiperInstance = new Swiper(swiperRef.current, {
          modules: [Navigation, Autoplay, Pagination],
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          navigation: {
            nextEl: '.review-nav-next',
            prevEl: '.review-nav-prev',
          },
          pagination: {
            el: '.reviews-swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          },
        });
      }
    };

    loadSwiper();

    return () => {
      if (swiperInstance && swiperInstance.destroy) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="reviews-carousel-container">
      <div className="reviews-swiper-wrapper">
        {/* Floating Previous Button */}
        <button
          type="button"
          className="review-nav-btn review-nav-prev"
          aria-label="Previous review"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {/* Swiper Carousel */}
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
        </div>

        {/* Floating Next Button */}
        <button
          type="button"
          className="review-nav-btn review-nav-next"
          aria-label="Next review"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {/* Bottom Controls Bar (Pagination Pills) */}
      <div className="reviews-bottom-controls">
        <div className="reviews-swiper-pagination"></div>
      </div>
    </div>
  );
}
