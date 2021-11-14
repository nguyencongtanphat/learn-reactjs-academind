import AllMeetUp from "./pages/AllMeetUp";
import NewMeetUp from "./pages/NewMeetUp";
import FavouristMeetUp from "./pages/Favourist";
import Layout from "./components/Layouts/Layout";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUp />
        </Route>
        <Route path="/NewMeetUp">
          <NewMeetUp />
        </Route>
        <Route path="/FavouristMeetUp">
          <FavouristMeetUp />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
