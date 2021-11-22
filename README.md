
# react-native-xhhtest1

## Getting started

`$ npm install react-native-xhhtest1 --save`

### Mostly automatic installation

`$ react-native link react-native-xhhtest1`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-xhhtest1` and add `RNXhhtest1.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNXhhtest1.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.library.dashixiong.RNXhhtest1Package;` to the imports at the top of the file
  - Add `new RNXhhtest1Package()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-xhhtest1'
  	project(':react-native-xhhtest1').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-xhhtest1/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-xhhtest1')
  	```


## Usage
```javascript
import RNXhhtest1 from 'react-native-xhhtest1';

// TODO: What to do with the module?
RNXhhtest1;
```
  