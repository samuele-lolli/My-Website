export default function Footer() {
    const email = "samuelelolli194@gmail.com";

    return (
        <footer className="py-4 px-6 bg-[#1a1a1a] bg-opacity-90 text-center shadow-inner">
            <p className="text-[#cccccc] mb-4">
                Feel free to reach out to me through the email below. Let’s connect and discuss exciting opportunities!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center text-[#52b788] font-semibold hover:text-[#cccccc] transition duration-300"
                >
                    <img
                        src="/email.svg"
                        alt="Email"
                        className="h-6 mr-2"
                    />
                    {email}
                </a>
            </div>
            <p className="text-[#cccccc] mt-4">
                &copy; {new Date().getFullYear()} Samuele Lolli. All rights reserved.
            </p>
        </footer>
    );
}