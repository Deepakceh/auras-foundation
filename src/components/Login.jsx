// src/components/LoginDialog.tsx
"use client"

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useState } from "react"

export default function Login({ open, setOpen }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription>Enter your credentials to access your account</DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                    <input
                        type="text"
                        placeholder="User Id"
                        className="w-full p-3 border rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-md"
                    />
                    <button type="submit" className="w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600">
                        Login
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
