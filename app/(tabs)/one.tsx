import { Text } from "react-native";
import { SafeAreaView } from "@/components/ui";
import { FC } from "react";

const OnePage: FC = () => {
  return (
    <SafeAreaView>
      <Text className={"text-blue-600 text-2xl"}>One page.</Text>
    </SafeAreaView>
  );
};

export default OnePage;
