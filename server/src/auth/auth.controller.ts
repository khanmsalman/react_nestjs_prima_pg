import { Body, Controller, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { Request, Response } from "express";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService:AuthService){}

    @Post('signup')
    userSignUp(@Body() userData:AuthDto,@Req() request:Request, @Res() response:Response){
        return this.authService.signUp(userData,request, response)
    }

    @Post('signin')
    userSignIn(@Body() userData:AuthDto,@Req() req:Request, @Res() res:Response){
        return this.authService.signIn(userData,req,res)
    }

}