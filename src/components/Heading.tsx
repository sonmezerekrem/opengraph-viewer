export default function Heading({children}: { children: string }) {
    return (
        <h1 className={"text-xl font-bold text-blue-600"}>{children}</h1>
    );
}
