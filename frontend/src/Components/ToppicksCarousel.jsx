/* eslint-disable react/prop-types */
  import { useState, useEffect, useRef } from 'react';
import ToppicksCard from './ToppicksCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HoverMenu from './HoverMenu';

export default function BeautyCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [hoverIndex, setHoverIndex] = useState(null);
  const carouselRef = useRef(null); // Ref for touch tracking

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 640) {
      setSlidesToShow(1); // 1 item for mobile
    } else if (screenWidth <= 1024) {
      setSlidesToShow(3); // 3 items for tablet
    } else {
      setSlidesToShow(3); // 6 items for desktop
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Touch gesture handlers
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext(); // Swipe left to move to the next item
    }
    if (touchStartX - touchEndX < -50) {
      handlePrev(); // Swipe right to move to the previous item
    }
  };

  const getVisibleItems = () => {
    let visibleItems = [];
    for (let i = 0; i < slidesToShow; i++) {
      visibleItems.push(items[(currentIndex + i) % items.length]);
    }
    return visibleItems;
  };

  return (
    <div
      className="w-full pl-5 pr-5 flex-1 justify-between items-center "
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex overflow-hidden justify-center">
        {/* Previous Button */}
        <button onClick={handlePrev} className="flex justify-center items-center">
          <ArrowBackIosIcon />
        </button>

        <div
          className="flex justify-between transition-transform ease-in-out duration-500"
          style={{
            width: `${slidesToShow * 100}%`,
          }}
        >
          {getVisibleItems().map((item, index) => (
            <div
              key={index}
              className={`shrink-0 px-2 flex justify-center
                w-${slidesToShow === 1 ? 'full' : slidesToShow === 2 ? '1/2' : '1/3'} 
                md:w-${slidesToShow === 1 ? 'full' : slidesToShow === 2 ? '1/2' : '1/3'} 
                lg:w-1/3`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <ToppicksCard title={item.title} imageSrc={item.imageSrc} altText={item.title} />

              {/* Show HoverMenu on hover */}
              {hoverIndex === index && (
                <div className="absolute">
                  <HoverMenu category={items[hoverIndex]} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button onClick={handleNext} className="flex justify-center items-center">
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}

