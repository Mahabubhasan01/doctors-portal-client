import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          tempore et!
        </h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My appointment</Link>
          </li>
          <li>
            <Link to="/dashboard/myreview">My reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/users">All users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
