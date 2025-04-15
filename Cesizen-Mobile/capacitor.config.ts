import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cesizen.mobile.app',
  appName: 'cesizen-mobile',
  webDir: 'dist/cesizen-mobile/browser',
  server: {
    androidScheme: 'https',
    iosScheme: 'https'
  },
  plugins: {
    CapacitorCookies: { enabled: true }
  }
};

export default config;
