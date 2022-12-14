import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Quiz from './components/Quiz/Quiz';

function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Topics></Topics>
          },
          {
            path: '/home',
            loader: async () => {
              return fetch('https://openapi.programming-hero.com/api/quiz');
            },
            element: <Topics></Topics>
          },
          {
            path: '/topics',
            element: <Topics></Topics>
          },
          {
            path: '/statistics',
            element: <Statistics></Statistics>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          },
          {
            path: '/quiz/:quizid',
            loader: async ({ params }) => {
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`);
            },
            element: <Quiz></Quiz>

          },
        ]
      },

      {
        path: '*',
        element: <Error></Error>
      }
    ]
  );
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
