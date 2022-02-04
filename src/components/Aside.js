import React from "react";

const Aside = () => {
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>
        x
      </button>
      <ul>
        <li>
          <a href="index.html">Buy and Sell</a>
        </li>
        <li>
          <a href="index.html">Jobs</a>
        </li>
        <li>
          <a href="index.html">Services</a>
        </li>
        <li>
          <a href="index.html">Community</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
