import React from 'react';
import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {

  return (
    <View className="flex-1 items-center justify-center bg-red-100">

      <ThemedText >
        Dashboard</ThemedText>
       
            <button className="rounded-full border border-black bg-light-blue-500 text-black px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white">
            Add New Plan +
            </button>
     <div>

     </div>
    </View>
  );
}

