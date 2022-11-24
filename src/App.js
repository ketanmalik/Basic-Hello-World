import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 1. Creating a component using the naive way - React.createElement()
// const naiveComponent = React.createElement("div", { className: "title" }, [
//     React.createElement("h1", { id: "heading-1" }, "Hello, world"),
//     React.createElement("h2", { id: "heading-2" }, "This is a React component"),
//     React.createElement("h3", { id: "heading-3" }, "It is created in the naive way using 'React.createElement'")
// ]);
// root.render(naiveComponent);

// 2. Creating a component using JSX
// const jsxComponent = (
//     <div>
//         <h1 id="heading-1">Hello, World</h1>
//         <h2 id="heading-2">This is a React component</h2>
//         <h3 id="heading-3">It is created using JSX</h3>
//     </div>
// )
// root.render(jsxComponent);

// 3. Creating a functional component
const FunctionalComponent = () => {
    return (
        <div>
            <h1 id="heading-1">Hello, World</h1>
            <h2 id="heading-2">This is a React component</h2>
            <h3 id="heading-3">It's a functional component</h3>
        </div>
    )
}
root.render(<FunctionalComponent />);
