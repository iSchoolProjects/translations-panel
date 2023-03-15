import React from 'react';
import Icon from '../icon/Icon';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

export const Block = ({className, size, ...props}: any) => {
  const blockClass = classNames({
    'nk-block': true,
    [`nk-block-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={blockClass}>{props.children}</div>;
};
export const BlockContent = ({className, ...props}: any) => {
  const blockContentClass = classNames({
    'nk-block-content': true,
    [`${className}`]: className,
  });
  return <div className={blockContentClass}>{props.children}</div>;
};

export const BlockBetween = ({className, size, ...props}: any) => {
  return <div className={`${size ? `nk-block-between-${size}` : 'nk-block-between'} ${className ? className : ''}`}>{props.children}</div>;
};
export const BlockHead = ({className, size, wide, ...props}: any) => {
  const blockHeadClass = classNames({
    'nk-block-head': true,
    [`nk-block-head-${size}`]: size,
    [`wide-${wide}`]: wide,
    [`${className}`]: className,
  });
  return <div className={blockHeadClass}>{props.children}</div>;
};
export const BlockHeadContent = ({className, ...props}: any) => {
  return <div className={`nk-block-head-content${className ? ' ' + className : ''}`}>{props.children}</div>;
};
export const BlockTitle = ({className, page, ...props}: any) => {
  const classes: any = [`nk-block-title ${page ? 'page-title' : 'title'}${className ? '' + className : ''}`];
  return (
    <React.Fragment>
      {!props.tag ? <h3 className={classes}>{props.children}</h3> : <props.tag className={classes}>{props.children}</props.tag>}
    </React.Fragment>
  );
};
export const BlockDes = ({className, page, ...props}: any) => {
  return <div className={`nk-block-des${className ? '' + className : ''}`}>{props.children}</div>;
};

export const BlockHeadSub = ({className, ...props}: any) => {
  return (
    <div className={`nk-block-head-sub ${className ? className : ''}`}>
      <span>{props.children}</span>
    </div>
  );
};

export const BlockImage = ({classNames, ...props}: any) => {
  return <div className={`nk-block-image ${classNames ? classNames : ''}`}>{props.children}</div>;
};

export const BackTo = ({className, link, icon, onClick, ...props}: any) => {
  const classes: any = [`back-to${className ? '' + className : ''}`];
  return (
    <div className="nk-block-head-sub" onClick={onClick}>
      <Link className={classes} to={process.env.PUBLIC_URL + link}>
        <Icon name={icon} />
        <span>{props.children}</span>
      </Link>
    </div>
  );
};
