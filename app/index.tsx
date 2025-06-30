import { Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "@/components/ui";
import { FC } from "react";

const Index: FC = () => {
  return (
    <SafeAreaView>
      <Text className={"text-2xl"}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href={"/one"}>
        <Text className={"text-blue-600 text-2xl"}>Go to One Page</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Index;
