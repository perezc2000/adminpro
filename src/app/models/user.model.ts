export class User {
  constructor(
    public name: string,
    public lastname: string,
    public email: string,
    public password: string,
    public image?: string,
    public role: string = 'USER',
    public google: boolean = false,
    public _id?: string
  ) { }
}
