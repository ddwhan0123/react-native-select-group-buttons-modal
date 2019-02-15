
# react-native-select-group-buttons-modal

[中文说明](https://blog.csdn.net/ddwhan0123/article/details/87350792)

## Getting started

`$ npm install react-native-select-group-buttons-modal --save`

### Mostly automatic installation

`$ react-native link react-native-select-group-buttons-modal`




## Usage
```javascript
import RNSelectGroupButtonsModal from 'react-native-select-group-buttons-modal';

 <RNSelectGroupButtonsModal
                    settingBuild={this._settingBuild}
                    onPaymentModeChanged={(item, index) => {
                        this.setState({
                            selectText: JSON.stringify(item)
                        })
                    }}
                    data={this.initData()}
                    closeButtonPress={(flag) => {
                        this.setState({
                            selectorVisible: flag
                        })
                    }}
                    selectorVisible={this.state.selectorVisible}/>
```
## Run Sample

```javascript

npm install expo-cli --global //If you haven't installed it before

git clone git@github.com:ddwhan0123/react-native-select-group-buttons-modal.git //clone git 

cd sample

npm install

expo start -c --localhost --ios
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
```javascript
  _settingBuild = {
        backdropColor: '#303437',
        backdropOpacity: 0.2,
        animationIn: 'slideInUp',
        animationTime: 400,//Default animation duration
        hideOnBack: true,
        modalTitle: '支付方式',//Main title
        modalTips: '业务控制文字内容',Subheading
        closeWithOutSideClick: true,//Click on the grey area to close the bullet window
        submitText: '确定'//Bottom Button submit text
    };
```
    
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


### Licenses

-------

- MIT
