import { NativeTabs, Label, Icon } from 'expo-router/native-tabs';

export default function Layout() {
  return (
   <NativeTabs>
  <NativeTabs.Trigger name="index">
    <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon sf="house.fill" />
  </NativeTabs.Trigger>

  <NativeTabs.Trigger name="search">
    <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon sf="magnifyingglass" />
  </NativeTabs.Trigger>

  {/* Create Property */}
  <NativeTabs.Trigger name="saved">
    <NativeTabs.Trigger.Label>Saved</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon sf="heart.fill" />
  </NativeTabs.Trigger>

  <NativeTabs.Trigger name="profile">
    <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon sf="person.fill" />
  </NativeTabs.Trigger>
</NativeTabs>
  );
}
