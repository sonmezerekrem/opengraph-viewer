import Link from "next/link";
import {FaGithub, FaLinkedin} from "react-icons/fa6";


export default function Footer() {
    return (
        <div className={"flex flex-col items-center justify-center gap-5 py-5 border-t mt-auto"}>
            <div className={"flex gap-5 text-3xl"}>
                <Link href={"https://github.com/sonmezerekrem"} target={"_blank"}
                      className={"hover:text-blue-700"}>
                    <FaGithub/>
                </Link>

                <Link href={"https://www.linkedin.com/in/ekrem-sonmezer/"} target={"_blank"}
                      className={"hover:text-blue-700"}>
                    <FaLinkedin/>
                </Link>
            </div>
            <div className={"text-center flex flex-col gap-2 text-gray-500 text-sm"}>
                <div className={"text-gray-950"}> Copyright
                    © {new Date().toLocaleDateString("en-US", {year: "numeric"})} Ekrem Sonmezer.
                </div>
                <div>All rights reserved.</div>
            </div>
        </div>
    );
}
