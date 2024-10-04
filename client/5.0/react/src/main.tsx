import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createHashRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import Index from "./index.tsx";
import Demo from "./examples/demo/demo.tsx";

const router = createHashRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <Index/>,
            },
            {
                path: "demo",
                element: <Demo/>,
            },
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
