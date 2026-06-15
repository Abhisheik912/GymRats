import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
