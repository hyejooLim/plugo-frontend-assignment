import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu, { MenuProps } from 'antd/lib/menu';
import { RxPerson } from 'react-icons/rx';

import { MenuWrapper, ManageIconWrapper } from '../../styles/layout/Navigation';
import { useGetCategories } from '../../hooks/query/categories';

const Navigation = () => {
  const { pathname } = useLocation();
  const { data: categories } = useGetCategories();
  const [selectedMenu, setSelectedMenu] = useState('');

  const menuItems: MenuProps['items'] = [
    {
      key: 'home',
      label: <Link to={'/'}>HOME</Link>,
    },
    {
      key: 'new-arrivals',
      label: <Link to={'/new-arrivals'}>NEW ARRIVALS</Link>,
    },
    {
      key: 'category',
      label: 'CATEGORY',
      children: categories?.map((category) => {
        return {
          key: category.name,
          label: (
            <Link to={`/category/${category.id}`} state={{ name: category.name }}>
              {category.name}
            </Link>
          ),
        };
      }),
    },
    {
      key: 'products',
      label: <Link to={'/products'}>ALL PRODUCTS</Link>,
    },
  ];

  const pattern = /(\w+-?)+/;
  const regex = new RegExp(pattern);

  useEffect(() => {
    const keyArray = regex.exec(pathname);
    if (keyArray) {
      setSelectedMenu(keyArray[0]);
    } else {
      setSelectedMenu('home');
    }
  }, [pathname]);

  return (
    <MenuWrapper mode='horizontal'>
      <Menu items={menuItems} className='menu_item' mode='horizontal' selectedKeys={[selectedMenu]} />
      <ManageIconWrapper>
        <Link to={'/manage'}>
          <RxPerson />
        </Link>
      </ManageIconWrapper>
    </MenuWrapper>
  );
};

export default React.memo(Navigation);
