import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useAnonymRedirect(url) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.email);

  useEffect(() => {
    console.log("isLoggedin =", isLoggedIn, url);
    if (isLoggedIn) {
      navigate(url);
    }
  }, [isLoggedIn]);

  return;
}

export { useAnonymRedirect };
