import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Page from "@/app/page";

const host = document.getElementById("root");
if (host) createRoot(host).render(<StrictMode><Page /></StrictMode>);
