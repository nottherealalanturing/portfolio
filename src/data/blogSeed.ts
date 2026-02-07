export type BlogEntry = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
};

export const blogSeed: BlogEntry[] = [
  {
    id: 'linters',
    title: 'Writing elegant code with linters',
    content:
      '<p>Clean code is easier to maintain, easier to review, and easier to scale.</p><p>In this post I explore how linters protect readability without slowing you down.</p>',
    updatedAt: new Date().toISOString(),
  },
];
