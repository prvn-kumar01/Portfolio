"use server";

export async function submitContact(formData: FormData) {
    // Extract form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Basic validation
    if (!name || !email || !message) {
        return { error: "All fields are required" };
    }

    // Simulate a delay for realism
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, send email here using Resend or similar

    return { success: true };
}
