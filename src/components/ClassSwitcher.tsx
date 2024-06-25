import React, { ReactElement, ReactNode, useState } from 'react';

interface ClassSwitcherProps {
  classes: string[];
  children: ReactNode
}

const ClassSwitcher: React.FC<ClassSwitcherProps> = ({ classes, children }) => {
  const [currentClass, setCurrentClass] = useState<string>('');

  const handleClassChange = (className: string) => {
    setCurrentClass(className);
  };

  const handleReset = () => {
    setCurrentClass('');
  };

  return (
    <div>
      <div className="mb-4">
        {classes.map((className, index) => (
          <button
            key={index}
            onClick={() => handleClassChange(className)}
            className="mr-2 mb-2 px-4 py-2 border rounded bg-blue-500 text-white"
          >
            {className}
          </button>
        ))}
        <button
          onClick={handleReset}
          className="px-4 py-2 border rounded bg-red-500 text-white"
        >
          Reset
        </button>
      </div>
      <div className={currentClass}>
        {children}
      </div>
    </div>
  );
};

export default ClassSwitcher;
