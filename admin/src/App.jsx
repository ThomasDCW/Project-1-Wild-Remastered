import { Admin, Resource, ListGuesser } from "react-admin";
import dataProvider from "./dataProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="restaurants" list={ListGuesser} />
      <Resource name="categories" list={ListGuesser} />
    </Admin>
  );
}

export default App;
