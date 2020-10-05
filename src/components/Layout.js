import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"

import Header from "./Header"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../styles/style.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    })
  }, [])

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        transparent
      />

      <main className="bg-black">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
