import PropTypes from 'prop-types';
import ProgressIndicator from './ProgressIndicator';
import ProgressPercent from './ProgressPercent';

const Progress = ({ percent }) => (
  <>
    <ProgressIndicator percent={percent} />
    <ProgressPercent percent={percent} />
  </>
);

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default Progress;
