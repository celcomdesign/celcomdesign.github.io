import React, { useState } from "react"

import JSONData from "../../content/aside.json"

const Aside = () => {
  const [personality] = useState(() => JSONData.personalities[Math.floor(Math.random() * JSONData.personalities.length)])

  return (
    <aside className="mt-9">
      <div className="container">
        <div className="row">
          <div className="d-none d-lg-block col-lg-4">
            <img placeholder="none" src={personality.people} alt="Join us!" quality={100} />
          </div>
          <div className="col-lg-8 d-flex justify-content-end">
            <div className="my-auto">
              <h4 className="font-weight-bold">Interested to join us?</h4>
              <a href="https://career.celcom.com.my/" target="_blank" rel="noreferrer"><button className="btn btn-outline-primary d-flex ml-auto">Career @Celcom</button></a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside