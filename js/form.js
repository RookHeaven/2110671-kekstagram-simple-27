import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const formUploadFile = form.querySelector('#upload-file');
const formOverlay = form.querySelector('.img-upload__overlay');
const closeOverlayButton = formOverlay.querySelector('#upload-cancel');

const onOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOverlay();
  }
};

const onCloseOverlayButtonClick = () => {
  closeOverlay();
};

const openOverlay = () => {
  formOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  closeOverlayButton.addEventListener('click', onCloseOverlayButtonClick);
  document.addEventListener('keydown', onOverlayEscKeydown);
};

const closeOverlay = () => {
  formOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  formUploadFile.value = '';

  document.removeEventListener('keydown', onOverlayEscKeydown);
  closeOverlayButton.removeEventListener('click', onCloseOverlayButtonClick);
};

const onFormUploadFileChange = () => {
  console.log('change');
  openOverlay();
};

formUploadFile.addEventListener('change', onFormUploadFileChange);

