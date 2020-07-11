import * as React from 'react';
import { List, Checkbox } from 'react-native-paper';

const state = {
  expanded: true
};

const _handlePress = () =>
  this.setState({
    expanded: !this.state.expanded
  });

const SettingsScreen = () => {
    return (
      <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          // left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          // left={props => <List.Icon {...props} icon="folder" />}
          // expanded={this.state.expanded}
          // onPress={this._handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    );
};

export default SettingsScreen;
