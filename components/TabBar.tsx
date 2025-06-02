import AntDesign from '@expo/vector-icons/AntDesign';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text } from '@react-navigation/elements';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const TabBar = ({ state, navigation, descriptors }: BottomTabBarProps) => {
    const primaryColor = '#00A38D'; // Example primary color, adjust as needed
    const greyColor = '#222'; // Example secondary color, adjust as needed

    const icons = {
        index: (props:any) => <AntDesign name="home" size={24} color={greyColor} {...props} />,
        exploreScreen: (props:any) => <AntDesign name="find" size={24} color={greyColor} {...props} />,
        profileScreen: (props:any) => <AntDesign name="user" size={24} color={greyColor} {...props} />
    };
    return (

    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
              if(['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }

          
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            style = {styles.tabbarItem}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
                icons[route.name] ({ color: isFocused ? primaryColor : greyColor})
            }





            <Text style={{ color: isFocused ? primaryColor : greyColor, fontSize: 11}}>
                {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous', 
    shadowColor:" #000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});


export default TabBar;