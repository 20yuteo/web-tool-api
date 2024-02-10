export interface UserRepositoryIF {
  isExist(id: string, accessToken: string): Promise<boolean>;
}
