import CONFIG from '../globals/config';
export default {
  small: (imageId) => `${CONFIG.BASE_IMAGE_URL}small/${imageId}`,
  medium: (imageId) => `${CONFIG.BASE_IMAGE_URL}medium/${imageId}`,
  large: (imageId) => `${CONFIG.BASE_IMAGE_URL}large/${imageId}`,
};
