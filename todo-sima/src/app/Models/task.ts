import { Category } from './category';

export interface Task {
  content: string | undefined;
  category_id: number;
  status: 'will' | 'done';
}
