import AsyncStorage from '@react-native-async-storage/async-storage'

// eslint-disable-next-line consistent-return
export default async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch (error) {
    console.log(error)
  }
}
