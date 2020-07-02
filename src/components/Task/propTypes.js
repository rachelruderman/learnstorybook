import PropTypes from 'prop-types';

export const propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};