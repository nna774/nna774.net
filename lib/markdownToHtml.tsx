import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const markdownToHtml = (markdown: string): JSX.Element => {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>;
};
