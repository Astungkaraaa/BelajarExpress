import { User } from "@prisma/client";

export type UserResponse = {
    username: string;
    name: string;
    token?: string;
}

export type CreateUserRequest = {
    username: string;
    name: string;
    password: string;
}

export type LoginUserRequest = {
    username: string;
    password: string;
}

export type UsersResponse = {
    username: string;
    name: string;
    password: string;
    token?: string | null;
}

export type UpdateUserRequest = {
    name?: string;
    password?: string;
}

export function toUserResponse(user: User): UserResponse {
    return {
        name: user.name,
        username: user.username
    }
}
