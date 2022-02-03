import React from 'react';
import {GeneralLink} from '../../atoms';
import {LinkBox} from './styled';

export const LinkContainer = props => {
  return (
    <LinkBox>
      <GeneralLink
        title={props.title}
        size="h5"
        color="secondary"
        action={props.action}
      />
    </LinkBox>
  );
};
