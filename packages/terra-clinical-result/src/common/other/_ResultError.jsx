import React from 'react';
import IconError from 'terra-icon/lib/icon/IconError';
import classNames from 'classnames/bind';
import styles from './OtherTemplates.module.scss';

const cx = classNames.bind(styles);

const ResultError = (props) => {
  const {
    ...customProps
  } = props;

  const templateClassnames = cx([
    'system-error',
  ]);

  return (
    <span
      {...customProps}
      className={customProps.className ? `${templateClassnames} ${customProps.className}` : templateClassnames}
    >
      <IconError className={cx('icon-error')} />
    </span>
  );
};

export default ResultError;
