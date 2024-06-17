
  export type TSignUpRole = {
    user: 'user',
    admin: 'admin',
  }

export type TSignUp = {
    readonly id?: string; 
  name: string;
  email: string;
  role: TSignUpRole; 
  password: string;
  phone?: string; 
  address?: string; 
}