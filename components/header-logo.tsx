import Link from "next/link";
import Image from "next/image";

export const Headerlogo = () =>{
    return(
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/logo.svg" alt="Logo" height={30} width={30}/>
                <p className="font-semibold text-white text-2xl ml-2.5">
                    Finance
                </p>
            </div>
        </Link>
    )
}