
# react-native-select-group-buttons-modal --dev branch

It's still under development.Please do not try case installation

## Getting started

`$ npm install react-native-select-group-buttons-modal --save`

### Mostly automatic installation

`$ react-native link react-native-select-group-buttons-modal`




## Usage
```javascript
import RNSelectGroupButtonsModal from 'react-native-select-group-buttons-modal';

// TODO: What to do with the module?
RNSelectGroupButtonsModal;
```

  


Android Demonstration Effect<br>
<img src="https://raw.githubusercontent.com/ddwhan0123/react-native-select-group-buttons-modal/dev/sample/doc/androidSample.gif" width="27%"/><br>
iOS Demonstration Effect<br>
<img src="https://raw.githubusercontent.com/ddwhan0123/react-native-select-group-buttons-modal/dev/sample/doc/iOS.gif" width="27%"/>
</figure>


### Properties
```javascript
settingBuild?:object
```
Objects that set underlying properties

-------

```javascript
onPaymentModeChanged?:(item, index) => void
```
Callback of selected content

-------

```javascript
data?:object[]
```
Button Data Source Object Array

-------

```javascript
closeButtonPress?:(flag) => void
```
Close button callback

-------

```javascript
selectorVisible?:boolean
```
Whether to display the bullet window label

-------

```javascript
defaultMode?:object
```
Objects selected by default

-------


```javascript
style
```
Setting Style Properties

-------


```javascript
SubmitButtonStyle
```
Setting the properties of the bottom button style

-------

```javascript
tipsColor
```
Setting Subtitle Style

-------

```javascript
hideCloseButton?:boolean
```
Set whether to display the close button

-------



```javascript
defaultCloseIcon?:object
```
Resource object of close button file

-------


```javascript
closeWithOutSideClick?:boolean
```
Click on the outside area to close the bullet window

-------


