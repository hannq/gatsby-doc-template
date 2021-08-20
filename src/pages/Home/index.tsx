import React, { FC } from "react";
import { PageProps, graphql } from "gatsby";
import { DocGraphql } from "../../types";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import './index.module.less';

interface DataProps extends DocGraphql {
}

const Home: FC<PageProps<DataProps>> = (props) => {
  const { path, data: { allSitePage, allMdx } } = props;
  return (
    <div styleName="page-wrapper">
      <Navbar />
      <h1>home</h1>
    </div>
  )
}

export default Home;

export const query = graphql`
  {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
