export function Card({ className = "", ...props }) {
  return <div className={`rounded-2xl shadow bg-white ${className}`} {...props} />;
}
export function CardContent({ className = "", ...props }) {
  return <div className={`p-6 ${className}`} {...props} />;
}
