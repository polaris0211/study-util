import { RouterProvider } from "react-router-dom";
import router from "./router.config";
import Layout from "./layout";

export default function Provider() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}
