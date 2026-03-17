import React from "react";

export function Footer() {
    return (
        <footer className="relative z-10 py-8 text-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Praveen Kumar. All rights reserved.
            </p>
        </footer>
    );
}
