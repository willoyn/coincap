import AsyncStorage from '@react-native-async-storage/async-storage'

export default async (value: any, key: string) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (error) {
    console.log(error)
  }
}
