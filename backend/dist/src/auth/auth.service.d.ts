import { RegisterDto, LoginDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    register(dto: RegisterDto): Promise<{
        message: string;
        user: {
            email: string;
            password: string;
            name: string;
            role: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    }>;
    login(dto: LoginDto): Promise<{
        message: string;
        token?: undefined;
    } | {
        message: string;
        token: string;
    }>;
}
