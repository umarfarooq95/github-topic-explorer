import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { client } from './api/api';
import Topic from "./pages/Topic";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect
              to={{
                pathname: "/topic/react",
              }}
            />
          </Route>
          <Route path="/topic/:topicId">
            <Topic />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
