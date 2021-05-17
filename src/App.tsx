import "./custom.css";
import { useRoutes } from "@patched/hookrouter";
import routes from "./routes";

const App = () => {
    return useRoutes(routes);
};

export default App;
