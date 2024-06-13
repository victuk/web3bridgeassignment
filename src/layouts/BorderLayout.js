export default function BorderLayout({children, className}) {
    return(
        <div className={`border-green border-[2px] border-solid rounded-[20px] ${className}`}>
            {children}
        </div>
    );
}