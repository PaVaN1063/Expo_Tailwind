import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: [
            {
              position: 'absolute',
              height: 70,
              borderTopWidth: 0,
              backgroundColor: Colors[colorScheme ?? 'light'].background,
            },
          ],
          tabBarButton: (props) => {
            // Skip rendering the middle (create) tab's button
            if (props.accessibilityState?.selected === false && props.onPress?.toString().includes('create')) {
              return null;
            }
            return <HapticTab {...props} />;
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dashboard',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
          }}
        />
        <Tabs.Screen
          name="create" // dummy screen for spacing
          options={{
            tabBarLabel: '',
            tabBarIcon: () => null,
            tabBarButton: () => <View style={{ width: 60 }} />, // empty gap for FAB
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: 'History',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="clock" color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person" color={color} />,
          }}
        />
      </Tabs>

      {/* Floating Action Button */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={[styles.fab, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]}
          onPress={() => {
            router.push('/create'); 
          }}
        >
          <IconSymbol size={28} name="plus" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 35,
    left: width / 2 - 30,
    zIndex: 10,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
