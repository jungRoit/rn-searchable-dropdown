import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import styles from './style';

export default class SearchableDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedText: '',
      selectedItem: {},
      items: [],
      showDropdown: false
    };
  }

  componentDidMount() {
    this.setState({
      items: this.props.items,
      selectedText: this.props.selectedText || ''
    });
  }

  renderDropDown = data => {
    if (!this.state.showDropdown) return null;
    return (
      <FlatList
        style={styles.flatListStyle}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedText: item.name, selectedItem: item });
              Keyboard.dismiss();
              this.textInputRef.focus();
            }}
          >
            <View
              style={[
                styles.itemWrapper,
                {
                  width: this.props.dropdownWidth
                    ? this.props.dropdownWidth
                    : 350
                }
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  togggleDropDown = () => {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown
    }));
  };

  render() {
    const data = this.state.selectedText
      ? this.state.items.filter(
          item =>
            item.name
              .toLowerCase()
              .indexOf(this.state.selectedText.toLowerCase()) > -1
        )
      : this.state.items;
    return (
      <View style={{ flex: 1 }}>
        <View keyboardShouldPersist='always' style={styles.boxWrapper}>
          <Text style={styles.titleStyle}>{this.props.title || ''}</Text>
          <TextInput
            ref={ref => {
              if (ref) this.textInputRef = ref;
            }}
            onFocus={this.togggleDropDown}
            style={[
              styles.textInputStyle,
              this.props.textInutStyle ? this.props.textInutStyle : {}
            ]}
            value={this.state.selectedText}
            placeholder={this.props.placeholder || 'Please Select an Item'}
            onChangeText={text => {
              this.setState({ selectedText: text });
            }}
            editable={true}
            onEndEditing={() =>
              this.props.onEndEditing(
                this.state.selectedText,
                this.state.selectedItem
              )
            }
          />
        </View>

        {this.renderDropDown(data)}
      </View>
    );
  }
}

SearchableDropdown.propTypes = {
  items: PropTypes.array.isRequired,
  selectedText: PropTypes.string,
  title: PropTypes.string,
  dropdownWidth: PropTypes.number,
  textInutStyle: PropTypes.object,
  onEndEditing: PropTypes.func,
  placeholder: PropTypes.string
};
