'use client';
// use use this directive because useRouter only works on client component
import Image from "next/image";

import { useRouter } from "next/navigation";


const Logo = () => {
    const router = useRouter();
    return (
        <Image
            alt="Logo"
            height={100}
            width={100}
            src="/images/logo.png"
            priority={true}
        />
    )
}

export default Logo;