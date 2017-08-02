import * as React from 'react';
import Title from '../../components/Title/Title';
import MenuBar from '../../components/molecules/MenuBar/MenuBar';

import './Container.css';

interface TitleProps {
  title: string;
  hasBackButton?: boolean;
  hasCloseButton?: boolean;
}

interface Props {
  titleProps: TitleProps;
  children: React.ReactNode;
}
const Container = (props: Props) => (
  <div className="container">
    <Title {...props.titleProps} />
    <div className="content">
      {props.children}
    </div>
    <MenuBar />
  </div>
);

export default Container;
