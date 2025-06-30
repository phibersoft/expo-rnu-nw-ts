import {
  Platform,
  SafeAreaView as OriginalSafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ViewProps,
} from "react-native";
import { FC } from "react";

export type SafeAreaViewProps = ViewProps & {
  insideScrollView?: boolean;
};

export const SafeAreaView: FC<SafeAreaViewProps> = ({
  children,
  style,
  insideScrollView = true,
  ...props
}) => {
  return (
    <OriginalSafeAreaView
      style={StyleSheet.compose(style, styles.androidSafeArea)}
      {...props}
    >
      {insideScrollView ? (
        <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
      ) : (
        children
      )}
    </OriginalSafeAreaView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 90, // tabbar
    backgroundColor: "#fff",
  },
});
