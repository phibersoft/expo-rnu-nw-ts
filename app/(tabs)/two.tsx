import { Text } from "react-native";
import { SafeAreaView } from "@/components/ui";
import { FC } from "react";

const TwoPage: FC = () => {
  return (
    <SafeAreaView>
      <Text className={"text-blue-600 text-2xl"}>Two page.</Text>
    </SafeAreaView>
  );
};

export default TwoPage;
