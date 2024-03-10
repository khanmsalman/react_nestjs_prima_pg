import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";


export class AuthDto{
    @IsString() 
    @IsNotEmpty()
    public name:string;

    @IsEmail()
    public email:string;

    @IsString()
    @Length(5,20, {message:"password must be between 5 and 20"})
    public password:string;
}

export class LoginAuthDto{
    @IsEmail()
    public email:string;
    
    @IsString()
    @Length(5,20, {message:"password must be between 5 and 20"})
    public password:string;
}