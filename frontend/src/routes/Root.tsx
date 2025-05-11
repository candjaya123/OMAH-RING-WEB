import { Outlet } from "react-router";

function Root() {
  // buat naro global state management
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Root;
