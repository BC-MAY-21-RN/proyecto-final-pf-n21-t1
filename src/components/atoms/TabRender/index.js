import React from "react";
import {GeneralText} from '..';
import {Tab} from './styled';

export const TabRender = props => {
  const isTabRendered = props.isTabRendered;
  if (isTabRendered) {
    return (
      <Tab>
        <GeneralText
          title={props.title}
          size={props.size}
          color={props.color}
          weight={props.weight}
        />
      </Tab>
    );
  } else {
    return <></>;
  }
};
