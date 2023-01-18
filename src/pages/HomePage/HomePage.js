import MyProfile from "./MyProfile/MyProfile";
import Blog from "./Blog/Blog";
import Todos from "./Todos/Todos";

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
      <Todos />

    </div>
  );
}

export default HomePage