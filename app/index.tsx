import { Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "@/components/ui/safe-area-view";

export default function Index() {
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
}
