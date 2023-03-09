import { Link, Redirect, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import DashBoard from './DashBoard';

const DashboardRoutes = ({ match: { url } }) => {
  const { path } = useRouteMatch()
  console.log(path)
  return (

    <Switch>
      <Route path={`${url}/`} component={DashBoard} />
    </Switch>

  );
};
export default DashboardRoutes;






/* function Topic() {

  const topics = [
  {
    name: "React Router",
    id: "react-router",
    description: "Declarative, component based routing for React",
    resources: [
      {
        name: "URL Parameters",
        id: "url-parameters",
        description:
          "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
        url: "https://ui.dev/react-router-v5-url-parameters/"
      },
      {
        name: "Programmatically navigate",
        id: "programmatically-navigate",
        description:
          "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
        url: "https://ui.dev/react-router-v5-programmatically-navigate/"
      }
    ]
  },
  {
    name: "React.js",
    id: "reactjs",
    description: "A JavaScript library for building user interfaces",
    resources: [
      {
        name: "React Lifecycle Events",
        id: "react-lifecycle",
        description:
          "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: "https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/"
      },
      {
        name: "React AHA Moments",
        id: "react-aha",
        description: "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/"
      }
    ]
  },
  {
    name: "Functional Programming",
    id: "functional-programming",
    description:
      "In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.",
    resources: [
      {
        name: "Imperative vs Declarative programming",
        id: "imperative-declarative",
        description:
          "A guide to understanding the difference between Imperative and Declarative programming.",
        url: "https://ui.dev/imperative-vs-declarative-programming/"
      },
      {
        name:
          "Building User Interfaces with Pure Functions and Function Composition",
        id: "fn-composition",
        description:
          "A guide to building UI with pure functions and function composition in React",
        url:
          "https://ui.dev/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/"
      }
    ]
  }
];

  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that wecan
  // get from `useParams()`.

  let { topicId } = useParams();
  const { path, url } = useRouteMatch()
  console.log(url)

  const topic = topics.find(({ id }) => id === topicId);
  const { resources } = topic

  console.log(topic)
  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>

      <ul>
        {resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Switch>
        <Route path={`${path}/:subId`}>
          <>Bla</>
        </Route>

      </Switch>

    </div>
  );
} */