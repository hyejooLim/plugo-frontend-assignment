import { useState } from 'react';

import AppLayout from '../components/layout/AppLayout';
import CreateProductModal from '../components/manage/CreateProductModal';
import { ManageWrapper } from '../styles/pages/Manage';

const Manage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppLayout>
      <ManageWrapper>
        <div className='center_area'>
          <img src='https://shop-static.plugo.world/7b9a07bcdde434b0237ef65f338664e8.svg' />
          <button className='login_button'>LOGIN</button>
        </div>
        <button className='create_product_button' onClick={() => setIsModalOpen(true)}>
          Create Product
        </button>
      </ManageWrapper>
      <CreateProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AppLayout>
  );
};

export default Manage;
