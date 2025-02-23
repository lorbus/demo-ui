import {Author} from './author';
import {Tag} from './tag';
import {Category} from './category';

export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
  author: Author;
  tags: Tag[];
}

export function sortPostsById(p1: Post, p2: Post) {
  return p1.id - p2.id;
}
