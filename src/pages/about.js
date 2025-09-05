import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bobalicious from '../components/bobalicious'

const roles = [
  { title: "Designers" },
  { title: "Developers" },
  { title: "Copywriters" }
]

const bobas = [
  {
    backgroundImage: `url("/uploads/bobalicious/cursor-1.png")`,
    color: "rgba(81, 196, 194, .8)",
    diameter: 280,
    position: {
      left: 170,
      top: 220
    },
    interval: 1,
    distance: 250,
    step: 40
  },
  {
    backgroundImage: `url("/uploads/bobalicious/cursor-2.png")`,
    color: "rgba(31, 190, 207, .8)",
    diameter: 280,
    position: {
      left: 220,
      top: 270
    },
    interval: 1,
    distance: 250,
    step: 20
  },
  {
    backgroundImage: `url("/uploads/bobalicious/cursor-3.png")`,
    color: "rgba(96, 199, 188, .8)",
    diameter: 280,
    position: {
      left: 190,
      top: 300
    },
    interval: 1,
    distance: 280,
    step: 27
  },
  {
    backgroundImage: `url("/uploads/bobalicious/cursor-4.png")`,
    color: "rgba(244, 127, 97, .8)",
    diameter: 280,
    position: {
      left: 250,
      top: 250
    },
    interval: 1,
    distance: 300,
    step: 18
  },
  {
    backgroundImage: `url("/uploads/bobalicious/cursor-5.png")`,
    color: "rgba(240, 85, 114, .8)",
    diameter: 280,
    position: {
      left: 180,
      top: 280
    },
    interval: 1,
    distance: 250,
    step: 22
  },
  {
    backgroundImage: `url("/uploads/bobalicious/cursor-6.png")`,
    color: "rgba(241, 102, 110, .8)",
    diameter: 280,
    position: {
      left: 235,
      top: 280
    },
    interval: 1,
    distance: 350,
    step: 35
  }
]

const creatives = [
  { 
    name: "Vimal",
    role: "Digital Content",
    quote: "By providing a voice to Celcom’s online platforms, I humanise the interactions that our customers have with us on our digital channels. The reward for me is in the customers who continue to trust us to stay connected.",
    image: "/uploads/pages/about/spotlight--vimal.png"
  },
  { 
    name: "Afni Ediantie",
    role: "CX GTM",
    quote: "The best way to control your customer experience is to intentionally create it”. I do not know who said that but intentionally creating great customer experience that distinguish us against competition is what I do here in Celcom.",
    image: "/uploads/pages/about/spotlight--afni.png"
  },
  { 
    name: "Muhammad Aliff",
    role: "UI/UX Design",
    quote: "Our team is a purpose-driven chapter, using our strong values and beliefs to guide us in Celcom's strategies as well as our everyday decisions: to unlock the potential and opportunity and be inspired by it!",
    image: "/uploads/pages/about/spotlight--aliff.png"
  },
  { 
    name: "Ezzat Fyrdaus Liao",
    role: "UI/UX Support",
    quote: "Imagine UI/UX is a road from point A to point B, you don't want to be driving on a bumpy, long, confusing and dark road. A good example will be smooth, short, straightfoward and able to see the road clearly. I'm here to provide a simple solutions for Celcom's customers while they're on our digital platform and to always hear their voice.",
    image: "/uploads/pages/about/spotlight--ezzat.png"
  },
  { 
    name: "Siti Nur'Aishah",
    role: "UI/UX Design",
    quote: "To be a great designer, you need to look a little deeper into how people think & act.",
    image: "/uploads/pages/about/spotlight--nuraishah.png"
  },
  { 
    name: "Nik Nazzatul Munirah",
    role: "HIPA UI/UX",
    quote: "Solving people’s problems is incredibly rewarding. There is always something exciting to look forward to.",
    image: "/uploads/pages/about/spotlight--munirah.png"
  },
  { 
    name: "Adam Hussain",
    role: "HIPA UI/UX",
    quote: "I love the fact that we are encouraged to continuously learn, grow, and iterate. Everyone has been so welcoming and open to ideas, and it is clear that Celcom values and encourages a growth mindset in all that we do.",
    image: "/uploads/pages/about/spotlight--adam.png"
  },
  { 
    name: "Nor Mizan",
    role: "UI/UX Design",
    quote: "I enjoy learning about the perspectives of other people and understanding human behaviours to help Celcom create better products through my research so that we can always put our customers as number one.",
    image: "/uploads/pages/about/spotlight--mizan.png"
  },
  { 
    name: "Ryann",
    role: "UX Design Chapter",
    quote: "The essence of design is to shift apathetic behavior. Design is not only a profession, it is an initiative, it is a movement.",
    image: "/uploads/pages/about/spotlight--ryann.png"
  },
  { 
    name: "Quenic",
    role: "UI/UX Design",
    quote: "My role in Celcom is to find the right elements and put them together to create a seamless digital experience for our users. It's a dance that I enjoy, the components are chorus and the design system the choreographer.",
    image: "/uploads/pages/about/spotlight--quenic.png"
  }
]

const designations = [
  {
    title: "UI/UX Designer",
    description: "We spearhead the overall development of our products with designs shaped by the commitment to deliver the best experience for our customers."
  },
  {
    title: "UX Researcher",
    description: "We instill a human touch in our design development, through rigorous data collection, prioritising our customers’ needs every step of the way."
  },
  {
    title: "UX Writer",
    description: "We ideate and create engaging communication through various channels. We amplify the vision of our designs in clear, transparent and empathy-focused language."
  },
  {
    title: "Front End Developer",
    description: "We develop intuitive and user-centred products that enable meaningful interactions through a combination of design, tech, and programming."
  },
  {
    title: "Back End Developer",
    description: "We play an invisible yet indispensable role as we build and maintain the technology that makes Celcom’s vision possible. We provide a steady foundation to our platforms with a focus on maximising efficiency and performance."
  },
  {
    title: "DevOps Engineer",
    description: "We collaborate with various parties to make sure our products evolve and scale to keep our platforms sensitive to change."
  }
]

const people = [
  {
    name: "Zee",
    image: "/uploads/pages/about/about--zee.png"
  },
  {
    name: "Vimal",
    image: "/uploads/pages/about/about--vimal.png"
  },
  {
    name: "Afni",
    image: "/uploads/pages/about/about--afni.png"
  },
  {
    name: "Quenic",
    image: "/uploads/pages/about/about--quenic.png"
  },
  {
    name: "Aliff",
    image: "/uploads/pages/about/about--aliff.png"
  },
  {
    name: "Ezzat",
    image: "/uploads/pages/about/about--ezzat.png"
  },
  {
    name: "Aishah",
    image: "/uploads/pages/about/about--aisyah.png"
  },
  {
    name: "Munirah",
    image: "/uploads/pages/about/about--munirah.png"
  },
  {
    name: "Adam",
    image: "/uploads/pages/about/about--adam.png"
  },
  {
    name: "Fatashah",
    image: "/uploads/pages/about/about--fatashah.jpeg"
  },
  {
    name: "Fareez",
    image: "/uploads/pages/about/about--fareez.png"
  },
  {
    name: "Fahmi",
    image: "/uploads/pages/about/about--fahmi.jpeg"
  },
  {
    name: "Harith",
    image: "/uploads/pages/about/about--harith.png"
  },
  {
    name: "Nazri",
    image: "/uploads/pages/about/about--nazri.jpeg"
  },
  {
    name: "Ainahusna",
    image: "/uploads/pages/about/about--aina.jpeg"
  },
  {
    name: "Azwana",
    image: "/uploads/pages/about/about--azwana.jpeg"
  },
  {
    name: "Asreena",
    image: "/uploads/pages/about/about--asreena.png"
  },
  {
    name: "Atikah",
    image: "/uploads/pages/about/about--atikah.png"
  },
  {
    name: "Hanim",
    image: "/uploads/pages/about/about--hanim.jpeg"
  },
  {
    name: "Nurin",
    image: "/uploads/pages/about/about--nurin.png"
  },
  {
    name: "Ainna",
    image: "/uploads/pages/about/about--ainna.jpeg"
  },
  {
    name: "Thava",
    image: "/uploads/pages/about/about--thava.png"
  },
  {
    name: "Yusri",
    image: "/uploads/pages/about/about--yusri.jpeg"
  },
  {
    name: "Ryann",
    image: "/uploads/pages/about/about--ryann.png"
  },
  {
    name: "Mizan",
    image: "/uploads/pages/about/about--mizan.jpeg"
  },
  {
    name: "Nazhan",
    image: "/uploads/pages/about/about--nazhan.png"
  },
  {
    name: "Sabri",
    image: "/uploads/pages/about/about--sabri.png"
  },
  {
    name: "You",
    image: "https://i.pinimg.com/originals/75/ec/d9/75ecd9c68fc73e4475c381bd292e37aa.png"
  }
]

const About = () => {
  const settings = {
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: true,
    infinite: true,
    initialSlide: 0,
    cssEase: "linear",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  }

  const [role, setRole] = useState(roles[0])
  const [textIdx, setTextIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIdx((i) => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setRole(roles[textIdx])
  }, [textIdx])

  return (
    <Layout>
      <header className="container">
        <div className="row align-items-center pb-6">
          <div className="col-lg-6">
            <h2 className="display-1 font-weight-bold mb-lg-0 animate__animated animate__fadeInUp animate__fast">
              We are&nbsp;
            </h2>
            <h2 className="display-1 font-weight-bold mb-lg-0 animate__animated animate__fadeIn animate__slow wrapper__animate">
              <span className="animate__flip">{role.title}</span>
            </h2>
            <h4 className="mt-4 animate__animated animate__fadeIn animate__slower animate__delay-1s">Our team consists of dreamers and doers. But most importantly, we nurture each other's ambitions and do the hard work in making our aspirations a reality.</h4>
          </div>
          <div className="offset-lg-1 col-lg-5 px-0">
            <StaticImage className="animate__animated animate__fadeIn" placeholder="none" src="../../static/uploads/pages/work/pattern.png" alt="Design Pattern" quality={100} />
          </div>
          <div className="d-block container-move">
            {bobas.map((item, id) => (
              <div
                className="part"
                style={{
                  left: `${item.position.left}px`,
                  top: `${item.position.top}px`,
                }}
                key={id}
              >
                <Bobalicious
                  interval={item.interval}
                  distance={item.distance}
                  step={item.step}
                >
                  <div
                    className="part__figure"
                    style={{
                      background: item.backgroundImage,
                      width: `${item.diameter}px`,
                      height: `${item.diameter}px`,
                    }}
                  />
                </Bobalicious>
              </div>
            ))}
          </div>
        </div>
      </header>
      <section className="container py-6">
        <div className="row">
          <div className="col-lg-4">
            <h3 className="h2 font-weight-bold mb-4">
              Strong values that <br />bring us together
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex flex-nowrap overflow-auto scrollbar-hidden">
            <div className="d-block pr-3" style={{width: "calc(100% / 5)", minWidth: "200px"}}>
              <div className="position-relative">
                <h4 className="text-uppercase font-weight-bold">Empathetic</h4>
                <span className="position-absolute d-block d-lg-none" style={{ top: "-2px", marginLeft: "32px" }}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 18 18"><path d="M0,0H9a9,9,0,0,1,9,9V9a9,9,0,0,1-9,9H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#954985"/></svg></span>
                <span className="position-absolute d-none d-lg-block" style={{ top: "0", marginLeft: "38px" }}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18"><path d="M0,0H9a9,9,0,0,1,9,9V9a9,9,0,0,1-9,9H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#954985"/></svg></span>
              </div>
              <ul className="list-unstyled">
                <li className="mb-2">Customer first</li>
                <li className="mb-2">Balancing stakeholders and users</li>
                <li className="mb-2">People first</li>
                <li className="mb-2">Understand customers' pain points and complaint</li>
                <li className="mb-2">Emotional support to others</li>
              </ul>
            </div>
            <div className="d-block pr-3" style={{width: "calc(100% / 5)", minWidth: "200px"}}>
              <h4 className="text-uppercase font-weight-bold">Simplicity</h4>
                <span className="position-absolute d-block d-lg-none" style={{ top: "-2px", marginLeft: "37px" }}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 18 18"><path d="M0,0H9a9,9,0,0,1,9,9V9a9,9,0,0,1-9,9H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#fdb934"/></svg></span>
                <span className="position-absolute d-none d-lg-block" style={{ top: "0", marginLeft: "44px" }}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18"><path d="M0,0H9a9,9,0,0,1,9,9V9a9,9,0,0,1-9,9H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#fdb934"/></svg></span>
              <ul className="list-unstyled">
                <li className="mb-2">Consistency</li>
                <li className="mb-2">Does not complicate matters</li>
              </ul>
            </div>
            <div className="d-block pr-3" style={{width: "calc(100% / 5)", minWidth: "200px"}}>
              <div className="position-relative">
                <h4 className="text-uppercase font-weight-bold">Passionate</h4>
                <span className="position-absolute d-block d-lg-none" style={{ top: "1px", marginLeft: "51px" }}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26"><circle cx="13" cy="13" r="13" fill="#009bdf"/></svg></span>
                <span className="position-absolute d-none d-lg-block" style={{ top: "4px", marginLeft: "62px" }}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 26 26"><circle cx="13" cy="13" r="13" fill="#009bdf"/></svg></span>
              </div>
              <ul className="list-unstyled">
                <li className="mb-2">Driven</li>
                <li className="mb-2">Love our work</li>
                <li className="mb-2">Challenge status quo</li>
                <li className="mb-2">Work as a team</li>
                <li className="mb-2">Positive driven</li>
              </ul>
            </div>
            <div className="d-block pr-3" style={{width: "calc(100% / 5)", minWidth: "200px"}}>
              <div className="position-relative">
                <h4 className="text-uppercase font-weight-bold">Accountable</h4>
                <span className="position-absolute d-block d-lg-none" style={{ top: "1px", marginLeft: "40px" }}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26"><circle cx="13" cy="13" r="13" fill="#f37021"/></svg></span>
                <span className="position-absolute d-none d-lg-block" style={{ top: "4px", marginLeft: "49px" }}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 26 26"><circle cx="13" cy="13" r="13" fill="#f37021"/></svg></span>
              </div>
              <ul className="list-unstyled">
                <li className="mb-2">First time right</li>
                <li className="mb-2">Speed of action</li>
                <li className="mb-2">Productive</li>
                <li className="mb-2">Do not wait</li>
              </ul>
            </div>
            <div className="d-block pr-3" style={{width: "calc(100% / 5)", minWidth: "200px"}}>
              <div className="position-relative">
                <h4 className="text-uppercase font-weight-bold">Structured</h4>
                <span className="position-absolute d-block d-lg-none" style={{ top: "-2px", marginLeft: "24px" }}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 18 18"><path d="M0,0H9a9,9,0,0,1,9,9V9a9,9,0,0,1-9,9H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#ee3e80"/></svg></span>
                <span className="position-absolute d-none d-lg-block" style={{ top: "0", marginLeft: "29px" }}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18"><path d="M0,0H9a9,9,0,0,1,9,9V9a9,9,0,0,1-9,9H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" fill="#ee3e80"/></svg></span>
              </div>
              <ul className="list-unstyled">
                <li className="mb-2">Data driven</li>
                <li className="mb-2">Insights driven</li>
                <li className="mb-2">Process driven</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-slanted pb-0">
        <div className="container">
          <div className="row align-items-top">
            <div className="col-lg-5">
              <h3 className="h2 font-weight-bold mb-4">
                Introducing Lim Zee King, <br />
                Head of Design
              </h3>
              <span className="position-absolute" style={{ marginTop: "-40px", marginLeft: "-40px" }}><svg xmlns="http://www.w3.org/2000/svg" width="96" height="212.25" viewBox="0 0 128 283"><text transform="translate(64 229)" fill="#009bdf" fontSize="253" fontFamily="Arial-BoldMT, Arial" fontWeight="700" opacity="0.131"><tspan x="-63.25" y="0">“</tspan></text></svg></span>
              <p className="h5">I live by Woodrow Wilson’s quote that says, “You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement.”
              </p>
              <h3 className="font-weight-bold mt-6" style={{ color: `rgb(121, 54, 128)` }}>Lim Zee King</h3>
              <h6 className="text-uppercase text-muted">Head of Design</h6>
            </div>
            <div className="offset-lg-2 col-lg-5 d-block d-lg-flex justify-content-end">
              <div className="d-block">
                <StaticImage placeholder="none" src="../../static/uploads/pages/about/intro--zee-king.png" alt="Head of Design" quality={100} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid container-lg py-6">
        <div className="row">
          <div className="col-12">
            <h3 className="h2 font-weight-bold text-center mb-4">
              Creatives’ Spotlight
            </h3>
          </div>
        </div>
        <div className="row row-cols-1">
          <Slider {...settings}>
            {creatives.map((spotlight, id) => (
              <div className="col mb-4" key={id}>
                <div className="card border-0 rounded-lg shadow bg-dark text-white">
                  <img src={spotlight.image} className="card-img-top rounded-lg" alt={spotlight.name} />
                  <div className="card-img-overlay rounded-lg d-flex flex-column align-items-center justify-content-end" style={{ background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 1) 100%)` }}>
                    <p className="card-text mx-2 small"><span className="position-absolute" style={{ marginTop: "-50px", marginLeft: "-20px" }}><svg xmlns="http://www.w3.org/2000/svg" width="41" height="134" viewBox="0 0 128 283"><text transform="translate(64 229)" fill="#f3f3f3" fontSize="253" fontFamily="Arial-BoldMT, Arial" fontWeight="700" opacity="0.599"><tspan x="-63.25" y="0">“</tspan></text></svg></span>{spotlight.quote}</p>
                    <h5 className="card-title mb-1">{spotlight.name}</h5>
                    <p className="card-text mb-2">{spotlight.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="container py-6">
        <div className="row">
          <div className="col-12">
            <h3 className="h2 font-weight-bold mb-4">
              Work hard, play harder
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex flex-nowrap overflow-auto scrollbar-hidden">
            <div className="row" style={{ minWidth: "1280px" }}>
              <div className="col-8 p-2">
                <img className="card-img" style={{ height: "368px", minWidth: "591.99px", objectFit: "cover" }} src="/uploads/pages/about/gallery--1.jpeg" alt="Design Chapter" />
              </div>
              <div className="col-4 p-2" >
                <img className="card-img" style={{ height: "368px", minWidth: "287.99px", objectFit: "cover" }} src="/uploads/pages/about/gallery--2.jpeg" alt="UX Research" />
              </div>
              <div className="col-4 p-2">
                <img className="card-img" style={{ height: "368px", minWidth: "287.99px", objectFit: "cover" }} src="/uploads/pages/about/gallery--3.jpg" alt="Designing" />
              </div>
              <div className="col-4 p-2">
                <img className="card-img" style={{ height: "368px", minWidth: "287.99px", objectFit: "cover" }} src="/uploads/pages/about/gallery--4.jpg" alt="HIPA Developers" />
              </div>
              <div className="col-4 p-2">
                <img className="card-img" style={{ height: "368px", minWidth: "287.99px", objectFit: "cover" }} src="/uploads/pages/about/gallery--5.jpeg" alt="HIPA Fry-yay" />
              </div>
              <div className="col-4 p-2">
                <img className="card-img" style={{ height: "368px", minWidth: "287.99px", objectFit: "cover" }} src="/uploads/pages/about/gallery--6.png" alt="Design Ideation" />
              </div>
              <div className="col-8 p-2">
                <img className="card-img" style={{ height: "368px", minWidth: "591.99px", objectFit: "cover" }} src="/uploads/pages/about/gallery--7.png" alt="Design Secret Santa" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-6">
        <div className="row">
          <div className="col-12">
            <h3 className="h2 font-weight-bold mb-4">
              We the people
            </h3>
          </div>
        </div>
        <div className="row">
          {designations.map((role, id) => (
            <div className="col-6 col-lg-4 mb-4" key={id}>
              <h4 className="text-uppercase font-weight-bold">{role.title}</h4>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container py-6">
        <div className="row">
          {people.map((person, id) => (
            <div className="col-3 col-md-2 col-lg-1 d-flex justify-content-center px-0" key={id}>
              <div className="m-1" style={{ width: "64px", height: "64px" }}>
                <img src={person.image} className="img-thumbnail rounded-circle w-100 h-100" style={{ objectFit: "cover" }} alt={person.name} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

export default About