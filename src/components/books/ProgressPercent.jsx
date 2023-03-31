import PropTypes from 'prop-types';

const ProgressPercent = ({ percent }) => (
  <div className="progress-percent">
    <span>{`${percent}%`}</span>
    <span>completed</span>
  </div>
);

ProgressPercent.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressPercent;
