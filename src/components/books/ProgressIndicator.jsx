import PropTypes from 'prop-types';

const ProgressIndicator = ({ percent }) => (
  <div className="progress-indicator">
    <div className="indicator" data-percent={percent} />
  </div>
);

ProgressIndicator.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressIndicator;
