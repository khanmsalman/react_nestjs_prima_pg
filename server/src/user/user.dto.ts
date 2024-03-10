import { IsEmail, IsString } from "class-validator";

export class UserDto {
  id?:number;

  @IsString()
  name: string;
  
  @IsString()
  @IsEmail()
  email:string;
  
  @IsString()
  password: string;
}
 

// OR

// import { Prisma } from "@prisma/client";

// export class UserDto implements Prisma.UserCreateInput{
//     id:number;
//     name: string;
//     email: string;
//     password: string;
// }

