import React from 'react';
import "./Footer.css";
export default () => {
  return (
    <footer className="p-3 text-center">
      Copyright &copy; {new Date().getFullYear()} Live Data Analysis
    </footer>
  );
};
