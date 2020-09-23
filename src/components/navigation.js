import React from 'react'
import { Link } from "react-router-dom";


export default function Navigation() {
    return (
        <nav className="site-navigation">
        <span>JSRamverk</span>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/reports">Rapporter</Link>
            </li>
            <li>
              <Link to="/register">Registrera</Link>
            </li>
            <li>
              <Link to="/login">Logga In </Link>
            </li>
          </ul>
        </nav>
    )
}
