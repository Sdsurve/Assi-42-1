import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./views/Home/Home";
import BlogView from "./views/BlogView/BlogView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/BlogView/:id", 
        element: <BlogView />
    },
    {
        path: "*",
        element: <h1>Not found</h1>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
