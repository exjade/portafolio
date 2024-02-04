import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles/breadcrumb.module.css';
import Paragraph from '../paragraph/paragraph';

function Breadcrumb({
    size,
    type,
    title,
    activePage,
    onClick,
}) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            type='button'
            className={classNames(`${styles.breadcrumb}`,
                {
                    [`${styles[`breadcrumb-${type}`]}`]: type,
                    [`${styles[`breadcrumb-${size}`]}`]: size,
                },
                {
                    [`${styles[`breadcrumb-pressed`]}`]: title === activePage,
                }
            )}
            onClick={handleClick}
        >
            <Paragraph text={title} />
        </button>
    )

}

Breadcrumb.propTypes = {
    title: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['left', 'center', 'right']),
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    activePage: PropTypes.string,
    onClick: PropTypes.func,
}

Breadcrumb.defaultProps = {
    type: 'left',
    size: 'md',
}

export default Breadcrumb