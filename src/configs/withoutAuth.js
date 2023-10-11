import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { errorNotification } from "../utils/Notification";

export const withoutAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const [auth, setauth] = useState(false);
    const router = useRouter();
    const token = Cookies.get("ctn");

    // console.log('auth', auth)

    useEffect(() => {
      if (token) {
        errorNotification("You are already Logged In", "top-right");
        router.push("/product-list");
      } else {
        setauth(true);
      }
    }, []);

    return auth ? <Component {...props} /> : null;

    // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};
