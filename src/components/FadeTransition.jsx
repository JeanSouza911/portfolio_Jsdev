import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

function FadeTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        transition: 'opacity 2.5s',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}

FadeTransition.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default FadeTransition;
