import React, { FC } from "react";
import { StaticQuery, graphql, PageProps } from "gatsby";
import { DocGraphql } from "../../types";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import './index.module.less';

const MDLayout: FC<PageProps<DocGraphql>> = (props) => {
  const { path, data: { allSitePage, allMdx }, children } = props;
  return (
    <div styleName="page-wrapper">
      <Navbar />
      <div styleName="content-wrapper">
        <Sidebar
          path={path}
          allSitePage={allSitePage}
          allMdx={allMdx}
        />
        <div styleName="article-wrapper">{children}</div>
      </div>
    </div>
  )
}

const MDLayoutWithQuery: FC<PageProps<any>> = (props) => (
  <StaticQuery
    query={graphql`
      {
        allSitePage {
          edges {
            node {
              path
            }
          }
          nodes {
            component
          }
        }
        allMdx(sort: {fields: frontmatter___order}) {
          edges {
            node {
              id
              frontmatter {
                title
                date
              }
              fileAbsolutePath
            }
          }
        }
      }
    `}
    render={(data: DocGraphql) => <MDLayout {...props} data={data} />}
  />
)

export default MDLayoutWithQuery;
