import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Group from "./GroupComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("Group", module)
  .add("default", () => <Group {...myProps} {...actions} />)
  .add("pinned", () => <Group {...myProps} pinned={true} {...actions} />)
  .add("archived", () => <Group {...myProps} archived={true} {...actions} />);

class App extends React.Component {
  render() {
    return (
      <div>
        <Group />
      </div>
    );
  }
}
export default App;
