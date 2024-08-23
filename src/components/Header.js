import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="tabs">
        <div>
        <button>Data</button>
        <button>Summary</button>
        <button>Logs</button>
        </div>
        <div>
        <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
