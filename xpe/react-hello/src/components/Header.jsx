export default function Header({ children, size }) {
  let fontSize = "text-xl";

  if (size === "large") {
    fontSize = "text-2xl";
  }
  return (
    <div>
      <header>
        <div className="bg-pink-200 mx-auto p-4 mb-2">
          <h1 className={`text-center font-semibold ${fontSize}`}>
            {children}
          </h1>
        </div>
      </header>
    </div>
  );
}
