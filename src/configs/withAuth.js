import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { errorNotification } from "../utils/Notification";

export const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const [auth, setauth] = useState(false);
    const router = useRouter();
    const token = Cookies.get("ctn");

    // console.log('auth', auth)

    useEffect(() => {
      if (!token) {
        errorNotification("Please login to continue", "top-right");
        router.push("/login");
      } else {
        setauth(true);
      }
    }, []);

    return auth ? <Component {...props} /> : null;

    // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};
