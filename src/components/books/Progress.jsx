import PropTypes from 'prop-types';
import ProgressIndicator from './ProgressIndicator';
import ProgressPercent from './ProgressPercent';

const Progress = ({ percent }) => (
  <div className="progress">
    <ProgressIndicator percent={percent} />
    <ProgressPercent percent={percent} />
  </div>
);

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default Progress;
