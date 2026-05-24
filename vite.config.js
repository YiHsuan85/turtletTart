import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // 或 @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: '/Turtle-EggTart/', // 必須與你的 GitHub 儲存庫名稱完全一致，前後都要有斜線
})
