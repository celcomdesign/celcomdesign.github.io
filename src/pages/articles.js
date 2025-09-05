import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import ReactRotatingText from "react-rotating-text"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FilterBar from "../components/filterbar"

const Articles = ({ data }) => {
  const articles = data.allArticlesJson.nodes
  
  const [hasMounted, setHasMounted] = useState("everything")
  const [isToggle, setIsToggle] = useState(false)

  const tags = [
    ...new Set(
    [].concat(
      "everything",
      ...articles.map((o) => o.data.attributes.category.data.attributes.name)
      )
    )
  ]

  let tagOption = tags.map((o) => ({ value: o, label: o }))

  // react-select onchange event
  const handleChange = (selectedOption) => {
    setHasMounted(selectedOption.value)
  }

  // react-select onfocus event
  const inputFocus = (e) => {
    e !== null ? setIsToggle(true) : setIsToggle(false)
  }

  // react-select onblur event
  const inputBlur = (e) => {
    e !== null ? setIsToggle(false) : setIsToggle(true)
  }

  return (
    <Layout>
      <header className="container">
        <div className="row align-items-center py-6">
          <div className="col-12 d-flex flex-column align-items-center mx-auto">
            <h2 className="h1 font-weight-bold mb-lg-0 animate__animated animate__fadeInUp animate__fast">
              Articles
            </h2>
            <h6 className="text-uppercase small animate__animated animate__fadeInUp">Our thoughts & stories</h6>
          </div>
        </div>
      </header>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="d-flex flex-wrap mb-4">
              <span>I want to see&nbsp;</span>
              <span className="d-inline-block" style={{ width: "12rem", borderBottom: "2px solid #000" }}>
                <ReactRotatingText
                  className={`position-absolute ${!isToggle ? "visible" : "invisible"}`}
                  style={{ color: "#999" }}
                  items={tags}
                />
                <FilterBar
                  className={isToggle ? "article-search visible" : "article-search invisible"}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  onChange={handleChange}
                  options={tagOption}
                />
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="24"
                  height="24"
                >
                  <path
                    fill="currentColor"
                    d="M40 7v1.267L26.721 23.404l-.048.058A3.014 3.014 0 0026 25.357V37.91l-4 2.4V25.357a3.014 3.014 0 00-.673-1.895l-.048-.058L8 8.267V7h32m1-2H7a1 1 0 00-1 1v2.639a1 1 0 00.225.634l13.55 15.446a1 1 0 01.225.634v16.714a1 1 0 001.008 1.006.992.992 0 00.572-.183l5.992-3.594a1 1 0 00.428-.823v-13.12a1 1 0 01.225-.634l13.55-15.446A1 1 0 0042 8.639V6a1 1 0 00-1-1z"
                  />
                  <path fill="currentColor" d="M27 24h-6v2h6v-2z" />
                </svg>
              </span>
            </h3>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          {articles.map((article, index) =>
            article.data.attributes.category.data.attributes.name.includes(hasMounted) || hasMounted === "everything" ? (
              article.data.attributes.header.featuredImage.data ? (
                <div
                  key={index}
                  id={article.data.id}
                  className={`${(index === 0 ? "col-12 col-md-6 col-lg-8" : "col-12 col-md-6 col-lg-4")} mb-3`}
                >
                  <Link
                    className={"text-dark"}
                    to={
                      `/article/${article.data.attributes.slug}`
                    }
                  >
                    <div className="card shadow h-100" style={{ borderTopRightRadius: (index === 0 || index >= 2 ? "60px" : ""), borderBottomLeftRadius: (index <= 1 ? "60px" : "") }}>
                      {index ===0 ? 
                        <>
                          <img
                            src={article.data.attributes.header.featuredImage.data.attributes.url}
                            className="card-img"
                            style={{ height: "351.56px", objectFit: "cover", borderTopRightRadius: "60px", borderBottomLeftRadius: "60px" }}
                            alt={article.data.attributes.header.title}
                          />
                          <div
                            className="card-img-overlay text-white"
                            style={{
                              height: "351.56px", borderTopRightRadius: "60px", borderBottomLeftRadius: "60px", background: "linear-gradient(180deg,rgba(0,0,0,.8),transparent)"
                            }}
                          >
                            <p className="small">
                              {article.data.attributes.updatedAt}
                            </p>
                            <h3 className="card-title w-75 mb-4">
                              {article.data.attributes.header.title}: {article.data.attributes.header.subtitle}
                            </h3>
                            <p
                              className="text-truncate text-wrap w-75 mb-0"
                              style={{display: "-webkit-box", WebkitLineClamp: "6", WebkitBoxOrient: "vertical"}}
                              dangerouslySetInnerHTML={{
                                __html:
                                  article.data.attributes.content[0].description
                              }}
                            ></p>
                          </div>
                        </> : 
                        <>
                          <img
                            src={article.data.attributes.header.featuredImage.data.attributes.url}
                            className="card-img"
                            style={{ height: "220px", objectFit: "cover", borderTopRightRadius: (index >= 2 ? "60px" : ""), borderBottomRightRadius: "0", borderBottomLeftRadius: "0" }}
                            alt={article.data.attributes.header.title}
                          />
                          <div
                            className="card-img-overlay text-white d-flex justify-content-start align-items-end py-2"
                            style={{
                              height: "220px", borderTopRightRadius: (index >= 2 ? "60px" : ""), background: "linear-gradient(180deg,rgba(0,0,0,.6),transparent)"
                            }}
                          >
                            <p className="small mb-0">
                              {article.data.attributes.updatedAt}
                            </p>
                          
                          </div>
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-truncate mb-2">
                              {article.data.attributes.header.title}: {article.data.attributes.header.subtitle}
                            </h5>
                            <p
                              className="text-right text-truncate text-wrap mb-0"
                              style={{display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical"}}
                              dangerouslySetInnerHTML={{
                                __html:
                                  article.data.attributes.content[0].description
                              }}
                            ></p>
                          </div>
                        </>
                      }
                    </div>
                  </Link>
                </div>
              ) : (
                <div
                  key={index}
                  id={article.data.id}
                  className="col-12 col-md-6 col-lg-4 mb-3"
                >
                  <Link
                    className="text-dark"
                    to={
                      `/article/${article.data.attributes.slug}`
                    }
                  >
                    <div className="card shadow h-100" style={{ borderTopLeftRadius: "60px" }}>
                      <div
                        className="card-body d-flex flex-column justify-content-start"
                        style={{ height: "350px" }}
                      >
                        <span className="small text-right text-muted mb-2">
                          {article.data.attributes.updatedAt}
                        </span>
                        <h5 className="card-title text-right">
                          {article.data.attributes.header.title}: {article.data.attributes.header.subtitle}
                        </h5>
                        <p
                          className="text-truncate text-wrap mt-auto mb-0"
                          style={{display: "-webkit-box", WebkitLineClamp: "11", WebkitBoxOrient: "vertical"}}
                          dangerouslySetInnerHTML={{
                            __html:
                              article.data.attributes.content[0].description
                          }}
                        ></p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            ) : null
          )}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allArticlesJson(sort: { data: { attributes: { updatedAt: DESC } } }) {
      nodes {
        data {
          id
          attributes {
            slug
            category {
              data {
                attributes {
                  name
                }
              }
            }
            author {
              data {
                attributes {
                  firstName
                  lastName
                }
              }
            }
            header {
              _xcomponent
              title
              subtitle
              description
              featuredImage {
                data {
                  attributes {
                    alt
                    url
                  }
                }
              }
            }
            content {
              id
              quote
              title
              subtitle
              description
            }
            createdAt(formatString: "DD MMMM, YYYY")
            updatedAt(fromNow: true)
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Articles" />

export default Articles