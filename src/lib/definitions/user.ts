export type User = {
  id?: number;
  username: string;
  nickname: string;
  password: string;
  email: string;
  image?: string | null;
  createTime?: Date | null;
  updateTime?: Date | null;
};
