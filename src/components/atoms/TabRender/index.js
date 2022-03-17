import React from 'react';
import {GeneralText} from '..';
import {Tab} from './styled';

export const TabRender = props => {
  const isTabRendered = props.isTabRendered;
  const {title, size, color, weight} = props;
  if (isTabRendered) {
    return (
      <Tab>
        <GeneralText title={title} size={size} color={color} weight={weight} />
      </Tab>
    );
  } else {
    return <></>;
  }
};
