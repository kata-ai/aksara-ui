declare module '*.svg' {
  const urlToFile: string;
  export default urlToFile;
}

declare module '*.css' {
  const stylesheet: void;
  export default stylesheet;
}

declare module '*.mdx' {
  const MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
