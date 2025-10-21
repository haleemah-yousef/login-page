import React, { useEffect } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";


export function Form() 
{
    // State variables for form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // This runs when the component first mounts
    useEffect(() => {
        console.log("Form mounted");
        return () => console.log("Form unmounted"); // cleanup when form is removed
        }, []);

    
    return (
        <form >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        
        <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>

        <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <div style={{ marginTop: "1rem" }}>
        <Button text="Login" onClick={() => {}} type="submit" />
        </div>
        </form>
    );

}