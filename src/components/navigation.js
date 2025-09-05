import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import * as styles from "./navigation.module.css"

import Logo from "./logo"

import JSONData from "../../content/navigation.json"

const Navigation = ({ siteTitle }) => {
  const [scroll, setShadow] = useState(false)

  const addShadow = () => {
    if (window.scrollY >= 10) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }

  useEffect(() => {
    return window.addEventListener('scroll', addShadow)
  })

  return (
    <nav className={ scroll ? "navbar navbar-expand-lg navbar-light bg-white fixed-top shadow" : "navbar navbar-expand-lg navbar-light bg-white fixed-top" }>
      <div className="container">
        <Link
          className="navbar-brand order-lg-1"
          to="/"
          aria-label={siteTitle}
        >
          <Logo />
        </Link>

        <div className="d-lg-flex flex-lg-wrap flex-lg-column align-items-lg-end order-lg-3 align-self-lg-end ml-3" style={{ width: "90px" }}>
          <div className="navbar-global bg-white border-top d-lg-none justify-content-start collapse collapse-light">
            {JSONData.icons.map((link, i) => (
              <React.Fragment key={link.url}>
                <img src={link.svg} alt={link.text} />
                <span className="nav-item d-flex">
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                  >
                    {link.text}
                  </a>
                </span>
              </React.Fragment>
            ))}
          </div>
          <div className="navbar-icon">
            {JSONData.icons.map((link, i) => (
              <React.Fragment key={link.url}>
                <span className="nav-item d-none d-lg-block">
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link"
                  >
                    <img src={link.svg} alt={link.text} />
                  </a>
                </span>
              </React.Fragment>
            ))}
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target=".collapse-light"
              aria-controls="navbar"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                role="presentation"
              ></span>
            </button>
          </div>
        </div>

        <div className="navbar-collapse collapse collapse-light order-lg-2 justify-content-center">
          <ul className={`navbar-tab ${styles.tab}`}>
            {JSONData.links.map((link, i) => (
              <React.Fragment key={link.url}>
                <li className="nav-item">
                  <Link 
                    to={link.url}
                    className={`nav-link ${styles.link}`}
                    activeClassName="active"
                  >
                    {link.text}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
