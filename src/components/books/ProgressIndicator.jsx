import PropTypes from 'prop-types';

const ProgressIndicator = ({ percent }) => (
  <div className="progress-indicator">{percent}</div>
);

ProgressIndicator.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressIndicator;
