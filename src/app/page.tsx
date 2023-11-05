import Form from "@/components/form";

export default async function Home() {
    return (
        <div className="w-screen h-screen flex flex-1 justify-center items-center bg-zinc-950">
            <main className="flex flex-1 justify-center items-center max-w-4xl bg-zinc-800 p-5 rounded-lg">
                <Form />
            </main>
        </div>
    );
}
