import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../components/layout.module.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = () => (
  <Layout>
    <header className={`container-fluid ${styles.peek}`}>
      <div className="container">
        <div className="row py-6 align-items-center">
          <div className="col-lg-12">
            <div className="offset-lg-6 col-lg-6 col-12 position-absolute">
              <StaticImage className="img-overlaid animate__animated animate__fadeIn animate__delay-1s" placeholder="none" src="../../static/uploads/pages/work/pattern.png" alt="Design Pattern" quality={100} />
            </div>
          </div>
          <div className="col-lg-6 py-9">
            <h2 className="display-1 font-weight-bold mb-lg-0">
              <span style={{display: "inline-block"}} className="animate__animated animate__fadeInUp animate__fast animate__delay-1s">A new beginning&nbsp;</span><br /><span style={{display: "inline-block"}} className="animate__animated animate__fadeInUp animate__delay-1s">for CX & UX</span>
            </h2>
            <h4 className="mt-4 animate__animated animate__fadeIn animate__slower">Gone were the days of smoke signals and handwritten letters. But communication is still a visual game. With every pop-up message to touch screen interface, we aspire to enhance each platform for the ease and convenience of our customers. This is our process of crafting your journey.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 pr-lg-6">
            <StaticImage placeholder="none" src="../../static/uploads/pages/work/icon-expressive--charity.png" alt="Relationship Level" quality={100} />
            <h4 className="font-weight-bold">Relationship Level</h4>
            <p>Providing an overall positive experience for our customers from the start and every step of the way.</p>
          </div>
          <div className="col-lg-4 col-12 pr-lg-6">
            <StaticImage placeholder="none" src="../../static/uploads/pages/work/icon-expressive--high-speed.png" alt="Journey Level" quality={100} />
            <h4 className="font-weight-bold">Journey Level</h4>
            <p>Refining interactions with our customers at every touchpoint of the journey for a seamless experience.</p>
          </div>
          <div className="col-lg-4 col-12 pr-lg-6">
            <StaticImage placeholder="none" src="../../static/uploads/pages/work/icon-expressive--self-service.png" alt="Interaction Level" quality={100} />
            <h4 className="font-weight-bold">Interaction Level</h4>
            <p>Ensuring that our customers achieve specific goals with their desired outcomes at every interaction.</p>
          </div>
        </div>
      </div>
    </header>
    <section className="container py-9">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-offset-lg-3">
          <h3 className="display-4 font-weight-bold text-center">
            Enhancing everyday life across touch points
          </h3>
        </div>
      </div>
    </section>
    <section className="container py-6">
      <div className="row align-items-top">
        <div className="col-lg-5">
          <h3 className="h2 font-weight-bold">
            Celcom Life
          </h3>
          <p>The design decision made by both side would have ripple effect across each other. Both need to work hand in hand to ensure great experience is delivered, and often enough to agree on direction for a particular journey.<br />&nbsp;<br />
          <Link
            className="text-decoration-underline"
            to="/article/celcom-life-3.0"
          >Read our process</Link>
          </p>
        </div>
        <div className="offset-lg-1 col-lg-6">
          <div className="d-flex justify-content-around w-100">
            <div className="d-block">
              <StaticImage src="../../static/uploads/pages/work/cla--1.png" alt="Celcom Life App" quality={100} />
            </div>
            <div className="d-block">
              <StaticImage src="../../static/uploads/pages/work/cla--2.png" alt="Celcom Life App" quality={100} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-fluid bg-slanted">
      <div className="container py-6">
        <div className="row align-items-top">
          <div className="col-lg-5">
            <h3 className="h2 font-weight-bold">
              Prisma Design System
            </h3>
            <p className="h5">Our design system helps us work together to build a great experience for all of Celcom’s products.</p>
            <p>Building products that people love is part of the good design foundations a good design system by creating great experiences for our customer, everyone needs to contribute to creating high-quality products that inspire customers, but to achieve all of this we need to have a strong foundations within the teams across the business, everything is a little piece to the puzzle.<br />&nbsp;<br />From typography, layouts and grids, colours, icons, components and coding conventions, to voice and tone, style guides, documentations, a design system is bringing all of these together in a way that allows your entire team to learn, build, and grow…<br />&nbsp;<br />
            <Link
              className="text-decoration-underline"
              to="/article/celcom-content-style-guide"
            >Beyond look & feel</Link>
            </p>
          </div>
          <div className="offset-lg-1 col-lg-6">
            <div className="d-block d-lg-flex">
              <StaticImage src="../../static/uploads/pages/work/prisma-components.png" alt="Prisma Components" quality={100} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container py-6">
      <div className="row align-items-top">
        <div className="col-lg-5">
          <h3 className="h2 font-weight-bold">
            We@Celcom
          </h3>
          <p>We@Celcom is a mobile app that aims to cultivate digitisation of the Celcom community to promote greater staff integration and improve our ways of working.<br />&nbsp;<br />Exclusive to warga Celcom.<br />&nbsp;<br />
          <Link
            className="text-decoration-underline"
            to="/about/"
          >We the people</Link>
          </p>
        </div>
        <div className="offset-lg-1 col-lg-6">
          <div className="d-flex justify-content-around w-100">
            <div className="d-block">
              <StaticImage src="../../static/uploads/pages/work/we--1.png" alt="We@Celcom" quality={100} />
            </div>
            <div className="d-block">
              <StaticImage src="../../static/uploads/pages/work/we--2.png" alt="We@Celcom" quality={100} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Our Work" />

export default Work