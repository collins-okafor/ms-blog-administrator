import { verify } from "jsonwebtoken";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router?.replace(to).then();
  }, [router, to]);
  return null;
}

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(false);
  const [isVerify, setIsVerify] = useState(true);

  let isLoggedin =
    typeof window !== "undefined" && window.localStorage.getItem("isLoggedIn");

  // let auth =
  //   typeof window !== "undefined" && window.localStorage.getItem("token");

  useEffect(() => {
    setIsVerify(true);

    let auth =
      typeof window !== "undefined" && window.localStorage.getItem("token");

    if (auth) {
      setUser(true);
    } else {
      setIsVerify(false);
      setUser(false);
    }

    setIsVerify(false);

    return () => {
      console.log("finished");
    };
  }, []);

  return (
    <>
      {isVerify ? (
        <>
          <div>Loading...</div>
        </>
      ) : (!isLoggedin || isLoggedin === null) &&
        router.pathname.includes("dashboard") ? (
        <Redirect to={"/"} />
      ) : isLoggedin && !router.pathname.includes("dashboard") ? (
        <Redirect to={"/dashboard"} />
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedRoute;
// && router.pathname.includes("dashboard")
