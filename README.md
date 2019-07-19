# rn-searchable-dropdown
Searchable Dropdown Component for React Native.

# Installation
## Yarn
``` yarn add rn-searchable-dropdown ```

## NPM
``` npm install rn-searchable-dropdown ```


# Properties
the library supports following props.

Name | Required | Type | Description
---- | - | --- | ------
items | Yes | Array | the array of items to be displayed in the dropdown
 selectedText | No | string | default value for the text input
  title | No | string | Title for the field
 dropdownWidth | No | number | width of the dropdown component. By default it is 350
  textInutStyle | No | object | styling for the text input component
 onEndEditing | Yes | func | function to be called when editing is done. it passes two parameters. first: selected Text, Second: Selected object if selected from dropdown
 placeholder | No | string | Placeholder value for the text input

  
