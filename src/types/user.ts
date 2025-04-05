export type Id = string | number

export type User = {
    login: string,
    id: Id,
    avatar_url: string,
    name: string,
    company: string | null;
    blog: string,
    followers: number,
    following: number,
    created_at: string,
    location: string,
    bio: string,
    public_repos: number,
    twitter_username: string | null
}

export type RejectUser = {
    code: string,
    message: string,
    status: number,
}