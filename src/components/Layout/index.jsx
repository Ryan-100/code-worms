import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const Layout = ({
  title = "Code Worms",
  description = "This is movie streaming website",
  children,
}) => {
  const [fixedFooter, setFixedFooter] = useState(false);
  const router = useRouter();
  // console.log(router);
  useEffect(() => {
    if (
      router.pathname === "/" ||
      router.pathname === "/watch" ||
      router.pathname === "/aboutUs" ||
      router.pathname.split("/")[1] === "watch"
    ) {
      setFixedFooter(true);
    } else {
      setFixedFooter(false);
    }
  }, [router.pathname]);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const footerRef = document.querySelector("footer");
    const height = footerRef.getBoundingClientRect().height;
    setFooterHeight(height);
  }, [footerHeight]);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main
        className="w-full flex-1 overflow-x-hidden min-h-screen"
        style={{ paddingBottom: footerHeight }}
      >
        {children}
      </main>
      <Footer fixed={fixedFooter} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;
