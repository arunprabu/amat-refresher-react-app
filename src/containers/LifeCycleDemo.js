import { Component } from "react";

class LifeCycleDemo extends Component {
  // must extend React.Component

  // state data = comp-wide data
  state = {
    isLoading: true,
    isError: false,
    posts: [],
  };

  componentDidMount() {
    console.log("###### 2. Inside componentDidMount");
    // after the initial rendering this will be called.
    // TODO: ideal lifecycle hook for rest api calls
    // URL: https://jsonplaceholder.typicode.com/posts?_limit=5
    // then, from here you can update the state
    // this.state.msg = 'wonderful'; // Do not mutate state directly. Use setState().
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isError: false,
        posts: [
          {
            id: 1,
            title: "react is wondeful",
          },
          {
            id: 2,
            title: "react is cool",
          }
        ],
      }); // whenever we update state using setState() render method will be called
    }, 4000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("###### 3. Inside shouldComponentUpdate");
    // when the state is update -- this will be called
    // it must return true / false
    // compare the prevState (this.state) and nextState
    // if changes found, then return true, else return false
    console.log(this.state); // prevState
    console.log(nextState); // nextState
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("###### 5. Inside componentDidUpdate");
    // called after the Update in JSX (after re-rendeing)
    // will never be called after initial rendering
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log("Called when the Comp goes out of the view");
    // you can use this hook to clear the data
    // unsubscribe to updates in state
    // clear interval, clear timeout
    this.setState({
      posts: []
    });
  }

  // must have render method
  render() {
    console.log("###### 1 & 4 Inside Rendering");
    // must return jsx

    if (this.state.isLoading) {
      return <div className="spinner-border text-success" role="status"></div>;
    }

    if (this.state.isError) {
      return (
        <div className="alert alert-danger">Some error occured. Try again</div>
      );
    }

    return (
      <div>
        <h4>First class comp</h4>
        <ul>
          {
            this.state.posts?.map( (post) => {
              return(
                <li key={post.id}>{post.title}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default LifeCycleDemo;
