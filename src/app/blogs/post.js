import fs from "fs";
import path from "path";

const parseFrontmatter = (fileContent) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");

    const value = valueArr
      .join(": ")
      .trim()
      .replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim()] = value;
  });

  return { metadata: metadata, content };
};

const getMDXFiles = (dir) =>
  fs.readdirSync(dir).filter((file) => {
    const ext = path.extname(file);
    return ext === ".mdx" || ext === ".md";
  });

const readMDXFile = (filePath) =>
  parseFrontmatter(fs.readFileSync(filePath, "utf-8"));

const processObsidianSyntax = (content) => {
  // 1. Process Images: ![[image.png]] -> ![image.png](/images/image.png)
  let processed = content.replace(/!\[\[(.*?)\]\]/g, (match, p1) => {
    return `![${p1}](/images/${p1})`;
  });

  // 2. Process Links: [[Some Note|Alias]] -> [Alias](/blogs/some-note)
  processed = processed.replace(/\[\[(.*?)\]\]/g, (match, p1) => {
    const [note, alias] = p1.split('|');
    const display = alias || note;
    const slug = note.toLowerCase().trim().replace(/\s+/g, '-');
    return `[${display}](/blogs/${slug})`;
  });

  return processed;
};

const getMDXData = (dir) => {
  let mdxFiles = [];
  try {
    mdxFiles = getMDXFiles(dir);
  } catch (error) {
    // If directory doesn't exist yet, return empty array instead of crashing
    return [];
  }

  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    
    // Process Obsidian syntax before sending to MDX
    content = processObsidianSyntax(content);
    
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
};

export default () =>
  getMDXData(path.join(process.cwd(), "src", "app", "blogs", "notes", "publish"));
