import { NativeTabs, Label, Icon } from 'expo-router/native-tabs';
import { useUserStore } from '../../../store/userStore';

export default function Layout() {

const isAdmin =useUserStore((state) => state.isAdmin)
    
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
  {isAdmin && (
  <NativeTabs.Trigger name="create">
    <NativeTabs.Trigger.Icon sf="plus.circle.fill" />
    <NativeTabs.Trigger.Label>Add Property</NativeTabs.Trigger.Label>
  </NativeTabs.Trigger>
    )}  


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
