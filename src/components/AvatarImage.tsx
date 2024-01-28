import Image from 'next/image'

export default function AvatarImage({ avatarUrl, size = 40 }: { avatarUrl: string, size?: number }) {
    return (
        <Image style={{ borderRadius: `${size}px` }} className="avatar" width={size} height={size} src={avatarUrl} alt="avatar-image" />
    )
}