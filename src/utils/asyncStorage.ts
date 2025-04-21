import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Armazena um valor no AsyncStorage.
 * @param key Chave onde o valor será armazenado.
 * @param value Valor a ser armazenado.
 */
export const storeData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`Erro ao salvar o item "${key}":`, error);
  }
};

/**
 * Recupera um valor do AsyncStorage.
 * @param key Chave do valor armazenado.
 * @returns Valor armazenado ou null se não existir.
 */
export const getData = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(`Erro ao recuperar o item "${key}":`, error);
    return null;
  }
};

/**
 * Remove um item do AsyncStorage.
 * @param key Chave do item a ser removido.
 */
export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Erro ao remover o item "${key}":`, error);
  }
};
