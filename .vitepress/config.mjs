import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AutoDMS",
  description: "Documentation for AutoDMS and all things DMS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Basics", link: "/basics" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/getting-started/introduction" },
        ],
      },
      {
        text: "Basics",
        items: [
          { text: "Timeline", link: "/basics/timeline" },
          { text: "搜新聞", link: "/basics/search" },
          {
            text: "看報紙",
            link: "/basics/read",
          },
          { text: "中摘", link: "/basics/chi" },
          { text: "英翻", link: "/basics/eng" },
          { text: "DMS Formatting", link: "/basics/dms" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/lostmypillow/dms-docs" },
    ],
  },
});
