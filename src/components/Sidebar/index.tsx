import React, { FC, useMemo } from 'react';
import { Link } from 'gatsby';
import { Menu } from 'antd';
import { DocGraphql } from '../../types/index';
import './index.module.less';

const { Item } = Menu;

interface Props extends DocGraphql {
  /** 当前路由地址 */
  path: string;
}

const Sidebar: FC<Props> = (props) => {
  const { path = null, allSitePage, allMdx } = props;
  const selectedKeys = useMemo(() => [path].filter(Boolean), [path]);
  const menuList = useMemo(() => {
    const sitePageMap = allSitePage.edges.map((edge, index) => ({
      [allSitePage.nodes[index].component]: edge.node
    })).reduce((acc, current) => Object.assign(acc, current))
    return allMdx.edges.map(edge => ({
      ...edge.node,
      ...sitePageMap[edge.node.fileAbsolutePath],
      fileAbsolutePath: edge.node.fileAbsolutePath
    }))
  }, []);

  return (
    <Menu
      styleName="sidebar-wrapper"
      mode="vertical"
      style={{ width: 256 }}
      selectedKeys={selectedKeys}
    >
      {
        menuList.map(({ path, frontmatter }) => (
            <Item key={path}>
              <Link to={path}>{frontmatter.title}</Link>
            </Item>
          ))
      }
    </Menu>
  )
}

export default Sidebar;
