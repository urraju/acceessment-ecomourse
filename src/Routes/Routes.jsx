import { Route, createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>
    }
])