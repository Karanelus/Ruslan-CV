import CvRender from "./components/CvRender";
import CvRuslanContext from "./context/CvRuslanContext";

const App = () => {
  return (
    <CvRuslanContext>
      <CvRender />
    </CvRuslanContext>
  );
};

export default App;
