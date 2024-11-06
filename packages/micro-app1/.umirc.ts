import { defineConfig } from "umi";

export default defineConfig({
  publicPath:'./',
  plugins: ['@umijs/plugins/dist/qiankun'],
  qiankun: {
    slave: {},
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'yarn',
  devtool: 'source-map',
});
