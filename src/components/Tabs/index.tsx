import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

// export default class Tabs extends React.Component {
//   state = {
//     activeTab: 0,
//   };

//   render({ children }: any = this.props) {

//   }
// }

const Tabs = ({ children }: any) => {
  const [activeTab, changeTab] = React.useState(0);
  const onPress = (id: number) => {
    requestAnimationFrame(() => {
      changeTab(id);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {children.map(({ props: { title } }: any, index: number) => (
          <TouchableOpacity
            style={[
              styles.tabContainer,
              index === activeTab ? styles.tabContainerActive : [],
            ]}
            onPress={() => onPress(index)}
            key={index}>
            <Text
              style={[
                styles.tabTextDefault,
                index === activeTab ? styles.tabText : [],
              ]}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>
        {children[activeTab]}
      </View>
    </View>
  );
};

export default Tabs;
