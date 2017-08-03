import * as React from 'react';
import './Title.css';

interface TitleProps {
   title: string;
   hasBackButton?: boolean;
   hasCloseButton?: boolean;
}

const icon = (props: TitleProps) => {
    return props.hasBackButton ? 'arrow_back' : '' || props.hasCloseButton ? 'close' : '';
};

export default (props: TitleProps) => (
    <div className="title">
      <div className="icon-div">
        <button className="icon-button">
         <i className="material-icons">{icon(props)}</i>
       </button>
      </div>
      <div className="title-div">{props.title}</div>
      <div className="space-div" />
    </div>
);
