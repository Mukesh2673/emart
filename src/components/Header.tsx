import { useAppSelector } from "@/app/store/hooks";
import CartIconWithBadge from "./Icons/cart";

export default function Header() {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <header className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      <div className="text-blue-600 text-xl font-bold">MegaMart</div>
      <nav className="flex items-center space-x-6">
        <a href="#" className="hover:text-blue-600">Groceries</a>
        <a href="#" className="hover:text-blue-600">Electronics</a>
        <a href="#" className="hover:text-blue-600">Fashion</a>
        <CartIconWithBadge count={count} />
      </nav>
    </header>
  );
}
