import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const partialResultValueWithNoDataPropSystolic = [
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      resultNoData: true,
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
  },
];

const partialResultValueWithNoDataPropDiastolic = [
  {
    id: '222',
    systolic: {
      eventId: '222.1',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '222.2',
      resultNoData: true,
    },
  },
];

export default () => {
  const theme = React.useContext(ThemeContext);
  const mockFlowsheetClassnames = classNames(
    cx(
      'mock-flowsheet-example',
      theme.className,
    ),
  );

  return (
    <div className={mockFlowsheetClassnames}>
      {/* This example column shows a standard result with the `hasResultNoData` prop or `result: { value: null, }` */}
      <div className={cx('mock-flowsheet-resultcolumn')}>
        <div className={cx('mock-flowsheet-resultcolumn-cell')}>
          <FlowsheetResultCell hasResultNoData />
        </div>
      </div>
      {/* This example column shows a partial Blood Pressure no data display using the `resultNoData` property name */}
      <div className={cx('mock-flowsheet-resultcolumn')}>
        <div className={cx('mock-flowsheet-resultcolumn-cell')}>
          <FlowsheetResultCell resultDataSet={partialResultValueWithNoDataPropSystolic} hideUnit />
        </div>
      </div>
      {/* This example column shows a partial Blood Pressure no data display using `result: { value: null, }` */}
      <div className={cx('mock-flowsheet-resultcolumn')}>
        <div className={cx('mock-flowsheet-resultcolumn-cell')}>
          <FlowsheetResultCell resultDataSet={partialResultValueWithNoDataPropDiastolic} hideUnit />
        </div>
      </div>
    </div>
  );
};
