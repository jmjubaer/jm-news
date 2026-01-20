import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-black/10">
            <nav className={`container flex justify-between items-center py-4 `}>
                <Link href={"/"} className="text-3xl font-bold">Jm News</Link>
                <div className=''>
                    <button className="px-5 py-2 rounded-md border cursor-pointer" >login</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
