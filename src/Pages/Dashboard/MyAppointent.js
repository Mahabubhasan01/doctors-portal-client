import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import TableData from "./TableData";

const MyAppointent = () => {
  const [user] = useAuthState(auth);
  const [patient, setPatient] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://hidden-sands-99680.herokuapp.com/patient?patient=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => setPatient(data));
  }, []);
  return (
    <div>
      <h1>
        {patient.map((p) => (
          <TableData key={p._id} p={p}></TableData>
        ))}
      </h1>
    </div>
  );
};

export default MyAppointent;
