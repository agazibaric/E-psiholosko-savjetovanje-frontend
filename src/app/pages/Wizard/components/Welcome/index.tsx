import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  position: relative;
  background-image: url(${process.env.PUBLIC_URL +
  '/images/wizardLandingImage.jpg'});
  width: 1280px;
  height: 720px;
  border-radius: 3%;
`;
const ButtonWrapper = styled(Button)`
  position: absolute;
  left: 35%;
  top: 82%;
  font-size: large;
  outline-style: solid;
  outline-color: black;
`;

interface WizardWelcomeProps {
  handleContinue: () => void;
}

const WizardWelcome: React.FC<WizardWelcomeProps> = ({ handleContinue }) => {
  return (
    <WelcomeContainer>
      <ButtonWrapper onClick={handleContinue}>
        Arrange an appointment
      </ButtonWrapper>
    </WelcomeContainer>
  );
};

export { WizardWelcome };
