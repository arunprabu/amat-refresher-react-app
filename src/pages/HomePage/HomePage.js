import MyProfile from "./MyProfile/MyProfile";
import Blog from "./Blog/Blog";
import Todos from "./Todos/Todos";
import LifeCycleDemo from "../../containers/LifeCycleDemo";
import Hello from "./Hello/Hello";
import Bye from "./Bye/Bye";
import { applyStyles } from "../../hoc/applyStyles";

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <h2>Demo of React Hooks</h2>
      <h3>useState() Hook</h3>
      <MyProfile />

      <hr />
      <h3>useEffect() Hook</h3>
      {/* <Blog /> */}

      <hr />
      <h3>useRef() and useReducer() Hooks</h3>
      {/* <Todos /> */}

      <hr />
      <h3>Life Cycle Hooks Demo</h3>
      {/* <LifeCycleDemo /> */}

      <hr />
      <h3>HOC Demo</h3>
      <StyledHello
        name="John"
        handleClick={() => {
          alert("clicked");
        }}
      />
      <StyledBye name="John" />
    </>
  );
};

export default HomePage;
