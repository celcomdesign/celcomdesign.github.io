import React, { Component } from "react"

import * as styles from "./footer.module.css"

const facts = [
  { text: "The shapes you see in this web representing each one of the components in our design system." },
  { text: "We should really put fun facts here." },
  { text: "Yes, we do eat, sleep and snore." },
  { text: "Really, build whatever you want." }
]

class Footer extends Component {
  constructor() {
    super()
    this.state = { textIdx: 0 }
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx
      this.setState({ textIdx: currentIdx + 1 })
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    let fact = facts[this.state.textIdx % facts.length]

    return (
      <footer className={`mt-lg-n9 ${styles.footer}`}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 order-2 order-lg-1">
              <p className="small text-muted">All views, posts and opinions shared are our own, Celcom Design.<br />Unless they are quotes, retweets, or links, natch.</p>
              <p className="small mb-0">Copyright &copy; {new Date().getFullYear()} Celcom Axiata Berhad [167469-A]. All Rights Reserved.</p>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <small className="small text-uppercase">Fun fact</small>
              <p className="mb-lg-0">{fact.text}</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
