export type User = {
  id?: number;
  username: string;
  nickname: string;
  password: string;
  email: string | null;
  image?: string | null;
  createTime?: Date | null;
  updateTime?: Date | null;
};
