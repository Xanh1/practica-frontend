import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="h-full rounded-sm px-2 py-4 w-14 flex flex-col justify-between items-center shadow-right">
            <Image src="/imgs/user.jpeg" width={24} height={24} />
                <ul>
                    <li className="mb-2 hover:scale-110">
                        <Link href="/dashboard/product" title="Products">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M3.17004 7.43994L12 12.5499L20.77 7.46994" stroke="#000000" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12 21.61V12.54" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path
                                        d="M9.93001 2.48004L4.59001 5.44004C3.38001 6.11004 2.39001 7.79004 2.39001 9.17004V14.82C2.39001 16.2 3.38001 17.88 4.59001 18.55L9.93001 21.52C11.07 22.15 12.94 22.15 14.08 21.52L19.42 18.55C20.63 17.88 21.62 16.2 21.62 14.82V9.17004C21.62 7.79004 20.63 6.11004 19.42 5.44004L14.08 2.47004C12.93 1.84004 11.07 1.84004 9.93001 2.48004Z"
                                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </Link>
                    </li>
                    <li className="mb-2 hover:scale-110">
                        <Link href="/dashboard/batch" title="Batches">
                            <svg width="28px" height="28px" viewBox="-2.4 -2.4 28.80 28.80" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M23 18C23 18.75 22.79 19.46 22.42 20.06C22.21 20.42 21.94 20.74 21.63 21C20.93 21.63 20.01 22 19 22C17.78 22 16.69 21.45 15.97 20.59C15.95 20.56 15.92 20.54 15.9 20.51C15.78 20.37 15.67 20.22 15.58 20.06C15.21 19.46 15 18.75 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C20 14 20.9 14.36 21.6 14.97C21.72 15.06 21.83 15.17 21.93 15.28C22.59 16 23 16.95 23 18Z"
                                        stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path d="M20.49 17.98H17.51" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10"
                                        strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M19 16.52V19.51" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10"
                                        strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M3.17004 7.43994L12 12.5499L20.7701 7.46991" stroke="#000000" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12 21.6099V12.5399" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path
                                        d="M21.61 9.17V14.83C21.61 14.88 21.61 14.92 21.6 14.97C20.9 14.36 20 14 19 14C18.06 14 17.19 14.33 16.5 14.88C15.58 15.61 15 16.74 15 18C15 18.75 15.21 19.46 15.58 20.06C15.67 20.22 15.78 20.37 15.9 20.51L14.07 21.52C12.93 22.16 11.07 22.16 9.93001 21.52L4.59001 18.56C3.38001 17.89 2.39001 16.21 2.39001 14.83V9.17C2.39001 7.79 3.38001 6.11002 4.59001 5.44002L9.93001 2.48C11.07 1.84 12.93 1.84 14.07 2.48L19.41 5.44002C20.62 6.11002 21.61 7.79 21.61 9.17Z"
                                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </Link>
                    </li>
                </ul>
                <Link className="hover:scale-110" href="" title="Logout">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12"
                                stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                    </svg>
                </Link>
        </aside>
    );
}