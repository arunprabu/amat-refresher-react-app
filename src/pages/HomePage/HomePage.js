import MyProfile from "./MyProfile/MyProfile";
import Blog from "./Blog/Blog";
import Todos from "./Todos/Todos";
import LifeCycleDemo from "../../containers/LifeCycleDemo";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <h2>Demo of React Hooks</h2>
      <h3>useState() Hook</h3>
      <MyProfile />

      <hr />
      <h3>useEffect() Hook</h3>
      {/* <Blog /> */}

      <hr/>
      <h3>useRef() and useReducer() Hooks</h3> 
      {/* <Todos /> */}

      <hr/>
      <h3>Life Cycle Hooks Demo</h3>
      <LifeCycleDemo />

    </div>
  );
}

export default HomePage