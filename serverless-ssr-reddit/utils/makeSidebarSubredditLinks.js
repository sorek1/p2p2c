/**
 * A simple factory to generate subreddit links.
 */
module.exports = (h, framework = "React") => subreddit =>
  h(
    "li",
    { key: subreddit, [framework === "vhtml" ? "class" : "className"]: "section__list-item" },
    h("img", {
      [framework === "vhtml" ? "class" : "className"]: "section__list-item-icon section__list-item-icon_image",
      alt: subreddit,
      src: "/img/" + subreddit + ".png",
    }),
    h("a", { href: "?fetch=" + subreddit }, "/r/" + subreddit),
  );
