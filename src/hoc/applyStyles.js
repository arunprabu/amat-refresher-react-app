// HOC -- higher order component is a fn 
// that takes in a component and returns a new component 

export const applyStyles = (OriginalComponent) => {

  const NewComponent = (props) => {
    console.log('1. Props Received in HOC');
    console.log(props);
    return (
      <div className="myStyle">
        <OriginalComponent {...props} />
      </div>
    );
  }

  return NewComponent;
}

