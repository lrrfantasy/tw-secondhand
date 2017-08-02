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
        <button className="icon-button">
           <i className="material-icons">{icon(props)}</i>
         </button>
        {props.title}
    </div>
);
