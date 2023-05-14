import styled from '../../../styles/styled';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { ButtonProps } from '../../Common/Button/types';

const MagicConnectorButtonContainer = styled(motion.button)`
      outline: none;
      border: none;
      box-shadow: none;
      background: transparent;
      color: white;
      .btnClick {
        cursor: pointer;
        border: 0;
        background: transparent;
        border-radius: 8px;
        min-width: 1em;
        height: 44px;
        width: 100%;
        font-size: 16px;
        overflow: hidden;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        will-change: transform;
        outline: 0;
        transform: translateZ(0) rotate(0.001deg);
      };
      .btnFill {
        border: solid 1px #292d31;
        border-radius: 8px;
        position: absolute;
        width: 100%;
        height: 100%;
        transform: translateY(0%) scale(1) rotate(0.001deg);
        transition: 0.4s cubic-bezier(0.5, 0.75, 0, 1), border 0.2s ease-in-out, background-color 0.2s ease-in-out;
      };
      .btnContent {
        border: none;
        position: relative;
        transform: translateY(0%) scale(1) rotate(0.001deg);
        transition: all 0.4s cubic-bezier(0.5, 0.75, 0, 1);
        padding: 0 20px;
        width: 100%;
        display: flex;
        align-items: center;
      };
      .btnDuplicateFill {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateY(100%) scale(0.96) rotate(0.001deg);
        transition: 0.4s cubic-bezier(0.5, 0.75, 0, 1), border 0.2s ease-in-out, background-color 0.2s ease-in-out;
        background: #292d31;
      };
      .btnDuplicateContent {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
        transform: translateY(100%) scale(0.9) rotate(0.001deg);
        transition: all 0.4s cubic-bezier(0.5, 0.75, 0, 1);
        display: flex;
        align-items: center;
        padding: 0 20px;
      };
      &:hover, &:focus {
        .btnFill {
          transform: translateY(0%) scale(0.98) rotate(0.001deg);
        };
        .btnContent {
          transform: translateY(-10%) scale(0.96) rotate(0.001deg);
          opacity: .5;
        };
        .btnDuplicateFill {
          transform: translateY(0%) scale(1) rotate(0.001deg);
        };
        .btnDuplicateContent {
          transform: translateY(0%) scale(1) rotate(0.001deg);
          opacity: 1;
        }
      }
`

const MagicConnectorButton = ({children, disabled, onClick}: PropsWithChildren<ButtonProps>) => {
  return (
    <MagicConnectorButtonContainer className={"btn"} disabled={disabled} onClick={onClick}>
      <div className={"btnClick"}>
        <div className={"btnFill"}></div>
        <div className={"btnContent"}>{children}</div>
        <div className={"btnDuplicateFill"}></div>
        <div className={"btnDuplicateContent"}>{children}</div>
      </div>
    </MagicConnectorButtonContainer>
  )
}

export default MagicConnectorButton;
