import React from 'react';
import styles from './SignInPage.module.css';
import { UserLayout } from '../../layouts/userLayout';

export const SignInPage: React.FC = (props) => {
  console.log(props)
  return (   
    <UserLayout>
      <h1>登录页面</h1>
    </UserLayout> 
  );
}