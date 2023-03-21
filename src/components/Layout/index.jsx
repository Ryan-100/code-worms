import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      router.pathname.split("/")[1] === "watch"
    ) {
      setFixedFooter(true);
    } else {
      setFixedFooter(false);
    }
  }, [router.pathname]);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={`flex flex-col `}>
        <Header />
        <main className="w-full flex-1 overflow-hidden">{children}</main>
        <Footer fixed={fixedFooter} />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;
