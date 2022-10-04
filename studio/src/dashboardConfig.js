export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "633c98ed5a40d7030696f50c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-52i1ek9e",
                  apiId: "c7b4a4c9-81ff-4f09-821e-9c8a72dc89e0",
                },
                {
                  buildHookId: "633c98ee3c1ca80474029af1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-sy316k1p",
                  apiId: "a489c7d6-2914-4291-bc19-b80a0233527b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/esundwick/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-sy316k1p.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
