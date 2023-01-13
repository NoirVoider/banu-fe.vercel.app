import { defineConfig } from "vitepress";

export default defineConfig({
  title: "BANU Front End",
  description: "BANU Front End",
  logo: "./theme-logo.png",
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#5e2627" }]
  ],

  themeConfig: {
    nav: nav(),
    sidebar: {
      "/guide/": sidebarGuide(),
      "/config/": sidebarConfig()
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022 BANU Front End"
    }
  }
});

function nav() {
  return [
    { text: "工具库", link: "/tools/index", activeMatch: "/tools" },
    { text: "UI组件库", link: "/fnUI/index", activeMatch: "/fnUI" },
    {
      text: "1.0.0",
      items: [
        {
          text: "变更日志",
          link: "https://code.banu.cn/ZOOTEAM/vitepress-BANU-FN/CHANGELOG.md"
        }
      ]
    }
  ];
}

function sidebarGuide() {
  return [
    {
      text: "简介",
      collapsible: true,
      items: [{ text: "Getting Started", link: "/guide/getting-started" }]
    }
  ];
}

function sidebarConfig() {
  return [
    {
      text: "Config",
      items: [
        { text: "Introduction", link: "/config/introduction" },
        { text: "App Configs", link: "/config/app-configs" },
        { text: "Theme Configs", link: "/config/theme-configs" },
        { text: "Frontmatter Configs", link: "/config/frontmatter-configs" }
      ]
    }
  ];
}
