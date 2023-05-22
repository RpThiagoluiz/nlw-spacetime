import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export function Test() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="font-bold text-zinc-50">Hello World</Text>
      <StatusBar style="auto" />
    </View>
  )
}
