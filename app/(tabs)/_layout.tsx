import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="[profile]"
        getId={
          ({ params }) => String(Date.now())
        }
      />
    </Stack>
  );
}
