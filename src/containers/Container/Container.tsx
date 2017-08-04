import * as React from 'react';
import Title from '../../components/Title/Title';
import VerticalSpacing from '../../components/atoms/VerticalSpacing/VerticalSpacing';
import MenuBar from '../../components/molecules/MenuBar/MenuBar';

import './Container.css';

interface TitleProps {
  title: string;
  hasBackButton?: boolean;
  hasCloseButton?: boolean;
}

interface Props {
  showMenuBar?: boolean;
  titleProps: TitleProps;
  children: React.ReactNode;
}
const Container = (props: Props) => (
  <div className="container">
    <Title {...props.titleProps} />
    <div className="content">
      {props.children}
    </div>
    {props.showMenuBar ? <MenuBar /> : <VerticalSpacing spacingHeightInEm={1} />}
  </div>
);

export default Container;
