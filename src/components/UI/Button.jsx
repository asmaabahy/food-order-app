export default function Button({ children, textOnly, className, ...props }) {
    
  const cssClass = `${textOnly ? "text-button" : "button"} ${className}`;
  
  return <button {...props} className={cssClass}>{children}</button>;
}
