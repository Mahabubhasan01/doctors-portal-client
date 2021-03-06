import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    fetch(`https://hidden-sands-99680.herokuapp.com/available/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setIsLoading(false);
      });
  }, [user]);
  return [admin, isLoading];
};
export default useAdmin;
