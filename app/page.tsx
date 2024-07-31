import Link from "next/link";
import Gallery from "./components/Gallery";

export default function Home() {
	return (
		<div id="container" className="">
			<header className="text-linen text-lg pt-2 pb-10 px-4 flex justify-end md:hidden">
				<nav className="flex gap-4 sm:hidden">
					<Link href="#">
						<span>IG</span>
					</Link>
					<Link href="#">
						<span>FB</span>
					</Link>
					<Link href="#">
						<span>X</span>
					</Link>
				</nav>
			</header>
			<main className="md:min-h-screen md:flex">
				<div className="flex">
					<div className="w-full md:px-[7.5rem] md:pt-40">
						<h1 className="text-linen text-[6.5rem] text-center pb-8 md:pb-14 sm:text-left sm:mx-4">
							EM
						</h1>
						<div className="bg-mapleSyrup h-30 w-full sm:w-88 sm:mx-4 flex justify-center">
							<div className="text-blackChocolate h-full text-5xl w-72 text-left content-center">
								35mm FOTOS
							</div>
						</div>
					</div>
					<div className="hidden sm:block md:hidden sm:content-end sm:w-full sm:text-center">
						<nav className="flex flex-col text-linen sm:text-4xl">
							<Link href="#">
								<span>IG</span>
							</Link>
							<Link href="#">
								<span>FB</span>
							</Link>
							<Link href="#">
								<span>X</span>
							</Link>
						</nav>
					</div>
				</div>

				<Gallery />
			</main>
			<footer className="bg-tan w-full h-46 flex flex-col md:hidden">
				<div className="m-auto text-center grid gap-1">
					<Link href={"#"} className="block">
						instagram
					</Link>
					<Link href={"#"} className="block">
						facebook
					</Link>
					<Link href={"#"} className="block">
						x (twitter)
					</Link>
				</div>
				<div className="m-auto">emisuarezvivas@gmail.com</div>
			</footer>
		</div>
	);
}
