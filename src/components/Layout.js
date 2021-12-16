import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="grid grid-rows-[min-content,1fr]">
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
