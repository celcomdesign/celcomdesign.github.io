import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data }) => {
  return (
    <Layout>
      <header className="container">
        <div className="row py-5 d-flex flex-column-reverse flex-lg-row">
          <div className="d-flex flex-column align-items-start justify-content-center offset-2 col-6 col-lg-4">
            <h2 className="font-weight-bold">Whoops! Something's not right.</h2>
            <p className="h4 mb-4">
              You just hit a route that doesn&#39;t exist. Oh, the sadness.
            </p>
            <p className="h5">
              If you were trying to reach another page, perhaps you can find it below.
            </p>
          </div>
        </div>
      </header>
      <section className="container">
        <div className="row">
          <div className="offset-1 offset-md-3 offset-lg-2 col-10 col-md-6 col-lg-8">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h2>Pages, ouh.</h2>
                <ul className="list-unstyled">
                  {data.allSitePage.nodes
                    .filter((data) => {
                      return data.componentChunkName.includes('pages')
                    })
                    .map(({ path }, index) => (
                      <li key={index}>
                        <Link to={path} className="text-capitalize">{path.substring(1, path.length - 1)}</Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-12 col-lg-6">
                <h2>Stories, yay!</h2>
                <ul className="list-unstyled">
                  {data.allSitePage.nodes
                    .filter((data) => {
                      return data.path.includes('/article/')
                    })
                    .map((data, index) => (
                      <li key={index}>
                        <Link to={data.path}>{data.pageContext.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allSitePage(filter: { path: { regex: "/^((?!404).)*$/" }, internalComponentName: { regex: "/^((?!Index).)*$/" } }) {
      nodes {
        path
        componentChunkName
        pageContext
      }
    }
  }
`

export const Head = () => <Seo title="Not found" />

export default NotFoundPage