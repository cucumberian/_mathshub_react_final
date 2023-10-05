import { useSelector } from "react-redux";

function useAuth() {
  const { uid, email } = useSelector((state) => state.user);
  return {
    isLoggedIN: !!email,
    uid: uid,
    email: email,
  };
}

export { useAuth };
