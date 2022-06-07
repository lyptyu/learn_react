import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Tabbar.module.css'
function Tabbar(props) {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/films" activeClassName={style.kerwinactive}>电影</NavLink>
        </li>
        <li>
          <NavLink to="/cinemas" activeClassName={style.kerwinactive}>影院</NavLink>
        </li>
        <li>
          <NavLink to="/center" activeClassName={style.kerwinactive}>我的</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Tabbar;
