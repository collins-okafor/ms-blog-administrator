import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router?.replace(to).then();
  }, [router, to]);
  return null;
}

const IsLoggin = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(false);

  useEffect(() => {
    let auth =
      typeof window !== "undefined" && window.localStorage.getItem("token");

    if (auth) {
      setUser(true);
    } else {
      setUser(false);
    }

    return () => {
      console.log("finished");
    };
  }, []);

  return (
    <>
      {!user && router.pathname.includes("dashboard") ? (
        <Redirect to={"/"} />
      ) : user ? (
        <Redirect to={"/dashboard"} />
      ) : (
        children
      )}
    </>
  );
};

export default IsLoggin;
