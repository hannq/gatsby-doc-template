import React, { FC, useRef } from 'react';
import { Link } from "gatsby"
import { useSize } from "ahooks"
import './index.module.less';
import erenLogoImg from '../../assets/images/joker.png';

const Navbar: FC = () => {
  const navbarEleRef = useRef<HTMLDivElement>(null);
  const { height = 0 } = useSize(navbarEleRef);

  return (
    <>
      <div ref={navbarEleRef} styleName="navbar-wrapper">
        <Link to="/Home/" styleName="left-wrapper">
          <img styleName="logo-img" src={erenLogoImg} alt="logo" />
          <div styleName="logo">Eren</div>
        </Link>
        <div styleName="right-wrapper">
          <Link styleName="nav-link" to="/quick-start/">文档</Link>
          <a
            styleName="nav-link"
            target="_blank"
            href="https://qianmi-resources.oss-cn-hangzhou.aliyuncs.com/eren-docs/api-doc/index.html"
          >API</a>
        </div>
      </div>
      <div style={{ height: height + 20 }} />
    </>
  )
}

export default Navbar
