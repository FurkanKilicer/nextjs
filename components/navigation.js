import Link from "next/link";
import Layout from "./layout";

const Navigation = () => {
  return (
    <Layout>
      <Link href="/">
        <a>AnaSayfa</a>
      </Link>
      <Link href="/about">
        <a>Hakkımızda</a>
      </Link>
    </Layout>
  );
};

export default Navigation;
