import * as React from 'react';
import styled from 'styled-components';

import BaseBannerStyles, { BaseBannerProps } from '../styles';
import bannerThemes from '../theme';

export type BannerState = 'error' | 'success' | 'warning' | 'info';

export interface BannerProps extends BaseBannerProps {
  /** Banner message. Could be a string or a `ReactNode`. */
  message: string | React.ReactNode;
  /** Additional CSS classes to give to the banner. */
  className?: string;
  /** Additional CSS properties to give to the banner. */
  style?: React.CSSProperties;
  /** Triggers when the Close button is clicked. */
  onClose?: () => void;
}

/** Banners are used to convey important information to users. */
const Banner: React.FC<BannerProps> = ({ className, style, message, state, onClose }) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  return (
    <Root className={className} style={style} state={state}>
      <Icon>
        <i className={`icon-${state}`} />
      </Icon>
      <Message>{message}</Message>
      {onClose && (
        <CloseButton
          type="button"
          aria-label="Close"
          data-testid="Banner-closeButton"
          onClick={handleClose}
          state={state}
        >
          <i className="icon-close" aria-hidden="true" />
        </CloseButton>
      )}
    </Root>
  );
};

Banner.defaultProps = {
  state: 'error',
};

export default Banner;

const Icon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 16px;
  width: 16px;
  height: 16px;
`;

const Message = styled('div')`
  flex: 1;
  margin-right: 16px;
`;

const CloseButton = styled('button')<Pick<BannerProps, 'state'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ state = 'error' }) => bannerThemes[state].textColor};
  font-size: 13px;
  width: 16px;
  height: 16px;

  &:focus {
    outline: none;

    i {
      outline-offset: 2px;
    }
  }
`;

const Root = styled('div')<Pick<BannerProps, 'state'>>`
  ${BaseBannerStyles}

  ${Icon} {
    i {
      display: inline-block;
      height: 16px;
    }
  }

  ${CloseButton} {
    i {
      display: inline-block;
      height: 13px;
    }
  }
`;
