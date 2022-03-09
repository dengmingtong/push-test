module.exports = {
  title: "Service Workbench Platform",
  tagline: "Researching data made easy",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
  organizationName: "aws", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Home",
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/awslabs/go-research-on-aws/website/",
        },
        theme: {
          disableDarkMode: true, // Not working yet
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
