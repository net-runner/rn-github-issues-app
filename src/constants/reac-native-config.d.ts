declare module 'react-native-config' {
  export interface NativeConfig {
    GIT_API_TOKEN?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
