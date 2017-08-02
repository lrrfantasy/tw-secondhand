import * as React from 'react';

const spacingHeight = (height) => {
  return {
    height: `${height}em`,
  };
};

const VerticalSpacing = props => (
  <div style={spacingHeight(props.spacingHeightInEm)} />
);

export default VerticalSpacing;
