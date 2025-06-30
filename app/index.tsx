import { Link } from "expo-router";
import { Button, SafeAreaView, Text } from "@/components/ui";
import { FC } from "react";

const Index: FC = () => {
  return (
    <SafeAreaView>
      <Text className={"text-2xl"}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Button>
        <Link href={"/one"}>
          <Text>Go to One Page</Text>
        </Link>
      </Button>
    </SafeAreaView>
  );
};

export default Index;
