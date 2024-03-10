import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { AuthDto, LoginAuthDto } from "./dto/auth.dto";
import * as bcrypt from 'bcrypt'
import { Request, Response } from "express";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{
    constructor(private readonly prisma:PrismaService, private jwt:JwtService){}

    async signUp(userData:AuthDto, req:Request,res:Response){
        const {name,email, password} = userData;
        console.log(userData)

        const findUser = await this.prisma.user.findUnique({where:{email}})
        if(findUser){
            throw new BadRequestException("User with Email Already Exist!")
        }

        const salt  = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const user = await this.prisma.user.create({
            data:{
                name,
                email,
                password:hashPassword
            }
        })
        return res.status(201).json({user,message:"User Signup Successfully"})
    }

 
    async signIn(userData:LoginAuthDto, req:Request, res:Response){
        const {email, password } = userData;
        console.log(userData)
        const findUser = await this.prisma.user.findUnique({
            where:{ email }
        })
        if(!findUser){
            throw new BadRequestException("User with this Email Not Exist!")
        }
        const isMatch =await bcrypt.compare(password,findUser.password);
        
        if(!isMatch){
            throw new BadRequestException("Invalid Credentials")
        }

        const token = await this.jwt.signAsync({name:findUser.name,email,password},{secret:process.env.SECRET})

        if(!token){
            throw new ForbiddenException()
        }

        res.cookie('token',token)
        return res.json({user:findUser,token})
    }
}