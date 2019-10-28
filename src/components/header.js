import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import "./header.css"

const Header = ({ siteTitle, data }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "github-logo.png" }) {
          childImageSharp {
            fixed(height: 48) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            display: `flex`,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0, flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div className="github">
            <a href="http://github.com/tombatossals/react-chords">
              <Img
                style={{ verticalAlign: "middle" }}
                fixed={data.file.childImageSharp.fixed}
              />
            </a>
          </div>
        </div>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header