import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { AllowedFormats, FileOrFolder, ICollection, IFileName } from './types';
const COLLECTION_PATH = 'cms/collections';

class CollectionService {
  name: string;
  format: AllowedFormats;
  type: FileOrFolder;

  constructor(name = '', type: FileOrFolder = 'folder', format: AllowedFormats = 'md') {
    this.name = name;
    this.type = type;
    this.format = format;
  }
  getAllPaths() {
    const fileNames: IFileName[] = [];

    fs.readdirSync(this.getCollectionPath()).forEach(file => {
      if (path.extname(file) == '.md') {
        fileNames.push({
          params: {
            slug: file.replace(/\.md$/, '')
          }
        });
      }
    });

    return fileNames;
  }
  getAllItems(): ICollection[] {
    const items: ICollection[] = [];
    fs.readdirSync(this.getCollectionPath()).forEach(file => {
      if (path.extname(file) == '.md') {
        items.push(this.getItem(file.replace(/\.md?$/, '')));
      }
    });

    return items;
  }

  getCollectionPath() {
    return path.resolve(`${CollectionService.getRootCollectionPath()}/${this.name}`);
  }

  getItem(slug: string): ICollection {
    const path = this.type === 'file' ? CollectionService.getRootCollectionPath() : this.getCollectionPath();
    const url = `${path}/${slug}.${this.format}`;
    const { content, data: meta } = matter(fs.readFileSync(url, 'utf8'));

    return {
      body: content,
      meta,
      filename: `${slug}`
    };
  }
  static getImagePath({ src }: { src: string }) {
    return src;
  }
  static getRootCollectionPath() {
    return path.resolve(process.cwd(), COLLECTION_PATH);
  }
}

export default CollectionService;
