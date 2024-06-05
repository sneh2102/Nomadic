import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ListingsStateProvider } from "./providers/ListingsStateProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ListingsStateProvider>
                <App />
            </ListingsStateProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
