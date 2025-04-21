import React from "react";

interface CheckerBoardProps {
  isDarkMode: boolean;
}

const CheckerBoard: React.FC<CheckerBoardProps> = ({ isDarkMode }) => {
  // Light mode: light gray squares on white background
  // Dark mode: dark gray squares on black background
  const darkModeStyles = {
    backgroundImage: `
      linear-gradient(45deg, #1a1a1a 25%, transparent 25%),
      linear-gradient(-45deg, #1a1a1a 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #1a1a1a 75%),
      linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)
    `,
    backgroundColor: '#000000',
    backgroundSize: "4px 4px",
    backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0px",
  };

  const lightModeStyles = {
    backgroundImage: `
      linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
      linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
      linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)
    `,
    backgroundColor: '#ffffff',
    backgroundSize: "4px 4px",
    backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0px",
  };

  const styles = isDarkMode ? darkModeStyles : lightModeStyles;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-300" style={styles} />
  );
};

export default CheckerBoard;