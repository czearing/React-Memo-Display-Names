import React from "react";
import "./styles.css";

const testComponent = () => {
  return (
    <div>
      <h1>content</h1>
    </div>
  );
};
testComponent.displayName = "myComponent";

const wrapper = testComponent;
const memoWrapper = React.memo(testComponent);

const memoTestWrapper = React.memo(testComponent);
if (testComponent.displayName) {
  memoTestWrapper.displayName = testComponent.displayName;
}

console.log(
  "The display name is " +
    memoWrapper.displayName +
    " when using the memoWrapper"
);
console.log(
  "The display name is " + wrapper.displayName + " when using the wrapper"
);

console.log(
  "The display name is " + wrapper.displayName + " when using the TestWrapper"
);

export default function App() {
  return <div className="App" />;
}
