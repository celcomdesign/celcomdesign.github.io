import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import IconBack from "@celcomdesign/iconography/dist/svg/icon/arrow-previous.svg"

const Article = ({ data }) => {
  const post = data.articlesJson.data.attributes
  
  return (
    <Layout>
      <article className="container-fluid">
        <div className="row">
          <div className="card border-0 w-100">
            {post.header.featuredImage.data ? (
              <img
                className="img-fluid"
                style={{ width: "100%", height: "30em", objectFit: "cover", WebkitClipPath: "polygon(100% 0,0 0,0 55%,100% 100%)", clipPath: "polygon(100% 0,0 0,0 75%,100% 100%)" }}
                src={post.header.featuredImage.data.attributes.url}
                alt={post.header.title}
              />
            ) : (
              <svg
                className="img-fluid banner-img d-lg-block mb-5"
                style={{ WebkitClipPath: "polygon(100% 0,0 0,0 55%,100% 100%)", clipPath: "polygon(100% 0,0 0,0 75%,100% 100%)" }}
                width="100%"
                height="440"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <rect width="100%" height="100%" fill="#f1f9ff"></rect>
              </svg>
            )}
            <div 
              className={`card-img-overlay rounded-0 px-0 ${(post.header.featuredImage.data ? "posts text-white" : "text-dark")}`}
              style={{ backgroundColor: post.header.featuredImage.data ? "rgba(0,0,0,.6)" : "", WebkitClipPath: "polygon(100% 0,0 0,0 55%,100% 100%)", clipPath: "polygon(100% 0,0 0,0 75%,100% 100%)" }}
            >
              <div className="container">
                <Link
                  className={`d-flex align-items-center text-uppercase small mt-3 ${(post.header.featuredImage.data ? "text-light" : "text-dark")}`}
                  to={`/articles`}
                  rel="next"
                >
                  <img
                    src={IconBack}
                    alt="Back"
                    width="22"
                    height="22"
                    className={`mr-3 ${(post.header.featuredImage.data ? "text-white" : "")}`}
                    style={{ filter: post.header.featuredImage.data ? "invert(1)" : "" }}
                  />
                  Back to articles
                </Link>
              </div>
              <div className="container col-10 col-lg-6 h-75 d-flex flex-column justify-content-center">
                <h1 className="font-weight-bold">{post.header.title}</h1>
                <h4 className="font-weight-bold">{post.header.subtitle}</h4>
                <p className="small mt-3">
                  By {post.author.data.attributes.firstName + " " + post.author.data.attributes.lastName}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-column justify-content-center">
          {post.content.map((section, index) =>
            section._xcomponent === "content.text" ? (
              <section className="container col-10 col-lg-6 py-3" key={index}>
                {section.title ? (
                  <h2 className="font-weight-bold">
                    {section.title}
                  </h2>
                ) : null}
                {section.subtitle ? (
                  <h4 className="font-weight-bold">
                    {section.subtitle}
                  </h4>
                ) : null}
                {section.description ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: section.description,
                    }}
                  ></p>
                ) : null}
                {section.image ? (
                  <div
                  className="d-flex flex-column"
                  >
                    <img
                      alt={section.image.data.attributes.alt}
                      src={section.image.data.attributes.url}
                      className="w-100 mx-auto"
                      style={{maxWidth:"fit-content"}}
                    />
                    {section.caption ? (
                      <p className="text-center text-black-50 pt-3">
                        {section.caption}
                      </p>
                    ) : null }
                  </div>
                ) : null}
              </section>
            ) : section._xcomponent === "content.image" ? (
              <section className="container" key={index}>
                <div
                  className="d-flex flex-column"
                >
                  <img
                    alt={section.image.data.attributes.alt}
                    src={section.image.data.attributes.url}
                    className="w-100 mx-auto"
                    style={{maxWidth:"fit-content"}}
                  />
                  {section.caption ? (
                    <p className="text-center text-black-50 pt-3">
                      {section.caption}
                    </p>
                  ) : null }
                </div>
              </section>
            ) : section._xcomponent === "content.quote" ? (
              <section className="container col-10 col-lg-6 py-3" key={index}>
                <div className="card">
                  <div
                    className="card-body p-6"
                    style={{
                      borderLeft: '10px solid #7FCDEF',
                      borderRadius: '0.5rem',
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: section.quote,
                      }}
                    ></div>
                  </div>
                </div>
              </section>
            ) : section._xcomponent === "content.list" ? (
              <section className="container col-10 col-lg-6 py-3" key={index}>
                <div className="row">
                  <div className="d-flex align-items-right col-12 col-lg-4">
                    <img
                      className="w-100"
                      alt={section.image.data.attributes.alt}
                      src={section.image.data.attributes.url}
                    />
                  </div>
                  <div className="col-12 col-md-8 my-auto text-center text-md-left">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: section.description,
                      }}
                    ></p>
                  </div>
                </div>
              </section>
            ) : null
          )}
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    articlesJson(data: { attributes: { slug: { eq: $slug } } }) {
      data {
        id
        attributes {
          slug
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
            _xcomponent
            id
            caption
            quote
            title
            subtitle
            description
            image {
              data {
                attributes {
                  alt
                  url
                }
              }
            }
          }
          createdAt(formatString: "DD MMMM YYYY")
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={ data.articlesJson.data.attributes.header.title } />

export default Article
