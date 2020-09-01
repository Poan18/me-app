import React from 'react'
import { Link } from "react-router-dom";


export default function Navigation() {
    return (
        <nav className="site-navigation">
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/reports/week/1">Rapport</Link>
            </li>
          </ul>
        </nav>
    )
}
