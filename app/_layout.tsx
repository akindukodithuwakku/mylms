import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="login">
      {/* Define the login screen as the initial route */}
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen name="index" options={{ title: "Dashboard" }} />
    </Stack>
  );
}
