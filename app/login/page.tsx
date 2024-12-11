import LoginForm from "@/app/ui/login-form";
import React from "react";

export default async function Page(props: { params: Promise<{ error?: string }> }) {
    const params = await props.params;
    const error = params.error;
    console.log(error);
    return (
        <main className="main">
            <LoginForm />
        </main>
    );
}