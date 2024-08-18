import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

const Header = () => {
  const headerOptions = [
    { label: "Category", url: "/" },
    { label: "Deals", url: "/Deals" },
    { label: "What's New", url: "/What's New" },
    { label: "Delivery", url: "/Delivery" },
  ]
    return (
      <div className="container mx-auto w-full bg-white">
        <nav className="py-3.5 flex flex-row text-black mx-21 px-10 justify-around items-center">
          <div className="basis-44">
            <Image src="/assets/Logo.svg" width="175" height="44" alt="Desk" />
          </div>
          <div className="text-base basis-96 flex justify-start text-stone-950 font-medium">
            {headerOptions.map((option, index) => (
              <Link key={index} className={cn(index === 0 ? "" : "pl-2.5" , "pt-4 pb-4 pr-4")} href={option.url}>{option.label}</Link>
            ))}
          </div>
          <div className="basis-80">
            <div className="w-80">
              <form action="">
                <input type="text" className="border-gray-50 rounded-full w-full px-4 h-10" placeholder="Search"/>
              </form>
            </div>
          </div>
          <div className="flex flex-row text-sm font-medium basis-48">
            <div className="basis-1/2 flex flex-row h-6">
              <Image src="/assets/user.png" width="24" height="24" alt="Desk" className="mr-2.5"/>
              <div>Account</div>
            </div>
            <div className="basis-1/2 flex flex-row h-6 pl-9">
              <Image src="/assets/cart.png" width="24" height="24" alt="Desk" className="mr-2.5"/>
              <div>Cart</div>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;