import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import PhotoSlider from "../../Shared/SliderSlick/SliderSlick";
import Modal from "./Modal";
import { BsZoomIn } from "react-icons/bs";

import s from "./SliderPreviewPhoto.module.scss";

const SliderPreviewPhoto = ({ photos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);
  const [startIndex, setStartIndex] = useState(0);
  const [sliderHeight, setSliderHeight] = useState("580px");

  const MAX_VISIBLE_PHOTOS = 3;

  const sliderPhotos = photos.filter((photo) => photo !== selectedPhoto);

  useEffect(() => {
    const updateSliderHeight = () => {
      const calculatedHeight = `${window.innerHeight * 0.7}px`;
      setSliderHeight(calculatedHeight);
    };

    updateSliderHeight();
    window.addEventListener("resize", updateSliderHeight);

    return () => {
      window.removeEventListener("resize", updateSliderHeight);
    };
  }, []);

  const handlePhotoClick = (photo) => {
    if (photo === selectedPhoto) return;

    setSelectedPhoto(photo);
  };

  const handleScrollUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleScrollDown = () => {
    if (startIndex + MAX_VISIBLE_PHOTOS < sliderPhotos.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const visiblePhotos = sliderPhotos.slice(
    startIndex,
    startIndex + MAX_VISIBLE_PHOTOS
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const photosForModal = [selectedPhoto, ...sliderPhotos];

  return (
    <>
      <div className={s.sliderPreviewPhoto}>
        <div className={s.mainPhoto}>
          <img
            src={selectedPhoto}
            alt="Selected"
            className={s.mainPhotoImage}
          />
          <div className={s.mainPhotoZoom} onClick={openModal}>
            <BsZoomIn />
          </div>
        </div>

        {sliderPhotos.length > 0 && (
          <div className={s.photoSlider}>
            <button
              className={s.scrollButton}
              onClick={handleScrollUp}
              disabled={startIndex === 0}
            >
              <IoIosArrowUp size="25px" />
            </button>

            {visiblePhotos.map((photo, index) => (
              <div
                key={index}
                className={s.sliderPhoto}
                onClick={() => handlePhotoClick(photo)}
              >
                <img src={photo} alt={`Photo ${index}`} />
              </div>
            ))}

            <button
              className={s.scrollButton}
              onClick={handleScrollDown}
              disabled={startIndex + MAX_VISIBLE_PHOTOS >= sliderPhotos.length}
            >
              <IoIosArrowDown size="25px" />
            </button>
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <PhotoSlider
            photos={photosForModal}
            width="auto"
            height={sliderHeight}
          />
        </Modal>
      )}
    </>
  );
};

SliderPreviewPhoto.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderPreviewPhoto;
