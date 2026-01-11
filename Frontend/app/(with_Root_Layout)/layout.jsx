import Header from "../Header";
import Footer from "../Footer"







export default function ProgramsLayout({ children }) {
    return (

        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}