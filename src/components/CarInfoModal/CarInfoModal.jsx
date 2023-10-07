import { Modal } from 'components/Modal/Modal';

export const CarInfoModal = ({ carInfo, toggleModal }) => {
  console.log(carInfo);

  return <Modal toggleModal={toggleModal}>hello</Modal>;
};
