import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../components/layout.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <header className="container">
      <div className="row align-items-center py-6" style={{height: "calc(100vh - 96px)"}}>
        <div className="col-lg-5">
          <h1 className={`display-1 font-weight-bold mb-lg-0 ${styles.extra}`}>
            <span style={{display: "inline-block"}} className="animate__animated animate__fadeInUp animate__faster">Connecting&nbsp;</span><span style={{display: "inline-block"}} className="animate__animated animate__fadeInUp animate__fast">people —&nbsp;</span><span style={{display: "inline-block"}} className="animate__animated animate__fadeInUp">one design&nbsp;</span><span style={{display: "inline-block"}} className="animate__animated animate__fadeInUp animate__slow">at a time</span>
          </h1>
        </div>
        <div className="offset-lg-2 col-lg-5 px-0">
          <StaticImage imgClassName="animate__animated animate__fadeIn animate__delay-1s" placeholder="none" src="../../static/uploads/pages/home/header.png" alt="Celcom Design" quality={100} />
        </div>
      </div>
    </header>
    <section className={`container py-6 ${styles.overlay}`}>
      <div className="row align-items-top">
        <div className="col-lg-3">
          <h2 className="h2 font-weight-bold">
            Designing for the people today and tomorrow
          </h2>
        </div>
        <div className="offset-lg-4 col-lg-5">
          <p className="h5">Behind Celcom’s signature digital blue is a fun group of people who put the customer first in all that we do. <br />&nbsp;<br />We string together visual ideas and build designs that ease the everyday interactions of our customers and envision the future that has yet to arrive.<br />&nbsp;<br />
          <Link
            className="text-decoration-underline"
            to="/work/"
          >Take a look at what we do</Link>
          </p>
        </div>
        <div className="d-flex justify-content-around w-100 my-lg-7 my-3">
          <div className="d-block">
            <StaticImage placeholder="none" src="../../static/uploads/pages/home/app--1.png" alt="Celcom Life" quality={100} />
          </div>
          <div className="d-block">
            <StaticImage placeholder="none" src="../../static/uploads/pages/home/app--2.png" alt="Celcom Life" quality={100} />
          </div>
          <div className="d-none d-lg-block">
            <StaticImage placeholder="none" src="../../static/uploads/pages/home/app--3.png" alt="Celcom Life" quality={100} />
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid bg-slanted">
      <div className="container py-6">
        <div className="row align-items-top">
          <div className="col-lg-3">
            <h3 className="h2 font-weight-bold">
              Hello there
            </h3>
          </div>
          <div className="offset-lg-4 col-lg-5">
            <p className="h5">We are a fun ragtag team with one goal: continuing Celcom’s historied legacy in bridging communications and solidifying relationships.<br />&nbsp;<br />We love dissecting design ideas over ice cream and breaking out into planks after powering through group meetings.<br />&nbsp;<br />
            <Link
              className="text-decoration-underline"
              to="/about/"
            >This is our story</Link>
            </p>
          </div>
          <div className="col-12 mt-lg-7 mt-3">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <StaticImage imgClassName="img-fluid" placeholder="none" src="../../static/uploads/pages/home/team-left.png" alt="Celcom Design" quality={100} />
              </div>
              <div className="col-lg-6">
                <StaticImage imgClassName="img-fluid" placeholder="none" src="../../static/uploads/pages/home/team-right.png" alt="Celcom Design" quality={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container py-6">
      <div className="row align-items-top">
        <div className="col-lg-3">
          <h3 className="h2 font-weight-bold">
            Embracing our beliefs
          </h3>
        </div>
        <div className="offset-lg-4 col-lg-5">
          <p className="h5">We take on today’s biggest problems because we believe a better world is possible. We see the world as it could be, and we strive to make it a reality.<br />&nbsp;<br />
          <Link
            className="text-decoration-underline"
            to="/articles/"
          >Things we think about</Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export default IndexPage