import "./main.css";

import "./app/Queens/Queens.component";
import "./app/pages/home.page";
import "./app/pages/queens.page";
import { Router } from "@vaadin/router";

import "./app/layouts/holy.layout";

const outlet = document.getElementById("outlet");
const router = new Router(outlet);
router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/queens", component: "queens-page" },
  { path: "(.*)", redirect: "/" }
]);
