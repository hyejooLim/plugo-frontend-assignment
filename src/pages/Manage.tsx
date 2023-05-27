import AppLayout from '../components/layout/AppLayout';
import { ManageWrapper } from '../styles/pages/Manage';

const Manage = () => {
  return (
    <AppLayout>
      <ManageWrapper>
        <div className='center_area'>
          <img src='https://shop-static.plugo.world/7b9a07bcdde434b0237ef65f338664e8.svg' />
          <button className='login_button'>LOGIN</button>
        </div>
        <button className='create_product_button'>Create Product</button>
      </ManageWrapper>
    </AppLayout>
  );
};

export default Manage;
