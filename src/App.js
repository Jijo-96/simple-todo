import { CurrentDate, ToDo, Status } from "./components";

const App = () => {
  return(
    <div className="container">
      <CurrentDate />
      <ToDo />
      <Status />
    </div>
  );
};

export default App;