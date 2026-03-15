import { createBrowserRouter } from 'react-router';
import { ROUTES } from '../constants/routes';
import withLoader from '../helpers/hocs/withLoader';
import { lazy } from 'react';
import Layout from '../components/layout/Layout/Layout';

const QuestionsPage = lazy(
  () => import('../pages/QuestionsPage/QuestionsPage'),
);
const QuestionPage = lazy(() => import('../pages/QuestionPage/QuestionPage'));

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: Layout,
    children: [
      {
        index: true,
        element: withLoader(QuestionsPage),
      },
      {
        path: ROUTES.QUESTION,
        element: withLoader(QuestionPage),
      },
    ],
  },
]);
