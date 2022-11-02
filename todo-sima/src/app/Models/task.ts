import { Category } from './category';

export interface Task {
  type: string | undefined;
  content: string | undefined;
  category_id: number;
  status: 'will' | 'done';
}
