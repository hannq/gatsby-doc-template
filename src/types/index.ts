export interface DocGraphql {
  allSitePage: {
    edges: {
      node: { path: string }
    }[];
    nodes: {
      component: string
    }[]
  },
  allMdx: {
    edges: {
      node: {
        frontmatter: Record<'date' | 'title', string>
        fileAbsolutePath: string;
        id: string;
      }
    }[];
  }
}
