import default_img from 'assets/img/no_image_available.jpeg';

export const handlePhotoLoadError = e => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = default_img;
};
