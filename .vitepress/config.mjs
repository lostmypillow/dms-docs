import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AutoDMS",
  description: "Documentation for AutoDMS and all things DMS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "AutoDMS", link: "/autodms/install" },
      { text: "Basics", link: "/basics/timeline" },
    ],

    sidebar: [
      {
        text: "AutoDMS",
        items: [{ text: "Install", link: "/autodms/install" }, {text:"How to use?", link: "/autodms/how-to-use"}],
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
          { text: "貼DMS", link: "/basics/dms" },
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
