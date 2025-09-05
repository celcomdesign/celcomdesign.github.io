const React = require("react")
const HtmlAttributes = {
  lang: "en"
}
const HeadComponents = [
  <script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA=" crossOrigin="anonymous" key="jquery"></script>
]

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}
