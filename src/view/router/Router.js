import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../page/Login';

const Router = createBrowserRouter([
    {
        path: '',
        element: <LoginPage />,
    },
]);

export default Router;
