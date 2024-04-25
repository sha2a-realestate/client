import { Avatar, AvatarFallback, AvatarImage } from '..';

interface UserAvatarProps {
  image: string;
  username: string;
  email: string;
}

export function UserAvatar({}: UserAvatarProps) {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
