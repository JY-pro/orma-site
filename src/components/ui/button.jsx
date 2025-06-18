export function Button({ variant = "solid", size = "md", className = "", ...props }) {
  const base = "inline-flex items-center justify-center font-medium rounded-lg focus:outline-none";
  const sizes = { md: "px-4 py-2 text-sm", lg: "px-6 py-3 text-base" };
  const variants = {
    solid: "bg-primary-600 text-white hover:bg-primary-700",
    outline: "border border-primary-600 text-primary-600 hover:bg-primary-50",
    icon: "p-2",
  };
  return (
    <button
      className={[base, sizes[size], variants[variant], className].join(" ")}
      {...props}
    />
  );
}
