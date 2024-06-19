import Sidebar from "@/components/Sidebar";
import "../globals.css";

export default function RootLayout({ children }) {
    return (
        <body>
            <Sidebar />
            {children}
        </body>
    );
}