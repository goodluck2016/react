import React from 'react';
import styles from './RegisterPage.module.css';
import { UserLayout } from '../../layouts/userLayout';
import { RegisterForm } from './RegisterForm';

export const RegisterPage: React.FC = (props) => {
  console.log(props)
  return (
    <UserLayout>
      <RegisterForm />
    </UserLayout>    
  );
}