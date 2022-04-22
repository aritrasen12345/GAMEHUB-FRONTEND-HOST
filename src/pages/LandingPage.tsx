import LandingLayout from '../layout/LandingLayout';
import LoginModal from '../components/app/landing/login/LoginModal';
import { useState } from 'react';
import { Button } from 'antd';

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <LandingLayout>
      <Button onClick={openModal}>Login</Button>
      <h1>Landing Page</h1>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </LandingLayout>
  );
};

export default Landing;
