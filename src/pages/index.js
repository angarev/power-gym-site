import React from "react"
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import bg from "../images/bg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        className="absolute top-0 w-full min-h-screen bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <span
          id="blackOverlay"
          className="w-full opacity-50 bg-black h-full absolute"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div
            className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"
            data-aos="fade-in"
          >
            <div>
              <h1 className="text-white font-semibold text-5xl">
                Feel The <span className="text-orange-500">Power</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Welcome to The Power Gym. We are a fitness and training center
                that focuses on pushing you to your absolute limit. Download our
                complete brochure to get started today!
              </p>
              <a
                href="#"
                className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white p-4 border border-orange-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>

    <section id="about" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div
            className="w-full md:w-5/12 ml-auto mr-auto px-4"
            data-aos="fade-right"
          >
            <div className="md:pr-12">
              <small className="text-orange-500">About our gym</small>
              <h3 className="text-4xl uppercase font-bold">
                Safe Body Building
              </h3>
              <p className="mt-4 text-lg leading-relaxed">
                The extension comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                        <i className="fas fa-dumbbell fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl">
                        The latest & greatest gym equipment
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                        <i className="fas fa-hard-hat fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl">
                        5-inch, quality foam floor padding
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                        <i className="fas fa-users fa-2x"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl">3 professional trainers</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full md:w-4/12 ml-auto mr-auto px-4"
            data-aos="fade-left"
          >
            <Image
              alt="..."
              filename="lady.jpeg"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="pt-20 pb-48 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold uppercase">
              Meet Our Trainers
            </h2>
            <p className="text-lg leading-relaxed m-4">
              Our trainers are are here to dedicate the time and effort that you
              need to get in the best shape of your life
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6">
              <Image
                alt="..."
                filename="instructor1.jpeg"
                className="shadow-lg rounded max-w-full mx-auto"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Mr Rogers</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Fithess instructor
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6">
              <Image
                alt="..."
                filename="instructor2.jpeg"
                className="shadow-lg rounded max-w-full mx-auto"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Anna Sake</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Aerobics Instructor
                </p>
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
          >
            <div className="px-6">
              <Image
                alt="..."
                filename="instructor3.jpeg"
                className="shadow-lg rounded max-w-full mx-auto"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Ronald McDonald</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Fithess instructor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-20 relative block bg-black">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-bold text-white uppercase">
              Contact Us
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              Contact us to ask any questions, aquire a membership, talk to our
              trainers or anything else
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="relative block py-24 lg:pt-0 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-orange-500"
              data-aos="fade-up-right"
            >
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-bold text-white">
                  Want to work with us?
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-white">
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Full Name"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    cols="80"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Type a message..."
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
