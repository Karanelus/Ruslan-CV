import Render from "./components/Render";
import RuslanContext from "./context/RuslanContext";

const App = () => {
  return (
    <RuslanContext>
      <Render />
    </RuslanContext>
  );
};

export default App;
