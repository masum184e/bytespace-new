import { Student } from "./student";

export type Course = {
  id: string;
  title: string;
  creator: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  price: number;
  students: Student[];
  avatars?: string[];
};