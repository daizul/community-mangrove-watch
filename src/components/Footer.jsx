export default function Footer() {
    return (
        <footer className="mt-10 border-t border-mangrove-100 bg-white">
            <div className="container-max py-6 text-sm text-mangrove-700 flex flex-col md:flex-row items-center justify-between gap-2">
                <p>© {new Date().getFullYear()} Community Mangrove Watch</p>
                <p>Built with ❤️ using React + Tailwind</p>
            </div>
        </footer>
    )
}