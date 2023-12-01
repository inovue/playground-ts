import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import {unified} from 'unified';
import remark from 'remark'
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {

  let mdString = fs.readFileSync(path.resolve(__dirname, "example.md")).toString();
  console.log(mdString);


  const htmlString = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process('# Hello world!');

  console.log(htmlString);

})();