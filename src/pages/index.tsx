import jsonwebtoken from "jsonwebtoken";
import dynamic from "next/dynamic";
import { setCookie } from "cookies-next";

const Todos = dynamic(() => import("../components/Todos"), { ssr: false });

export const getServerSideProps = () => {
  const secret = process.env.TIPTAP_SECRET;
  // create JWT and store in cookies,
  const data = {
    allowedDocumentNames: ["valtio-with-map", "valtio-without-map"]
  };
  const jwt = jsonwebtoken.sign(data, secret, {
    // const jwt = jsonwebtoken.sign(data, secret, {
    expiresIn: "7 days",
  });
  return {
    props: {
      jwt,
    },
  };
};

const Index = ({ jwt }: { jwt: string }) => {
  setCookie("room2", jwt);

  return (
    <div>
      <Todos />
    </div>
  );
};

export default Index;
