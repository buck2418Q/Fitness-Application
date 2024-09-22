// import React from 'react';
import PropTypes from 'prop-types';
import '../styleSheets/Button.css';

function Button({ text, onClick, type = 'primary', size = 'medium', icon, isLoading = false }) {
    const getButtonClass = () => {
        let buttonClass = 'btn';

        // Button type styles
        if (type) {
            buttonClass += ` btn-${type}`;
        }

        // Button size styles
        if (size) {
            buttonClass += ` btn-${size}`;
        }

        return buttonClass;
    };

    return (
        <button className={getButtonClass()}
            onClick={onClick}
            disabled={isLoading}>
            {isLoading ? 'Loading...' : (
                <>
                    {icon && <span className="btn-icon">{icon}</span>}
                    {text}
                </>
            )}

        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    icon: PropTypes.element,
    isLoading: PropTypes.bool
};

// i have commented this because this gives error "Button: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", its better to to work straight 

// Button.defaultProps = {
//     onClick: () => { },
//     type: 'primary',
//     size: 'medium',
//     isLoading: false
// };

export default Button;
