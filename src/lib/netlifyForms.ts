export async function submitNetlifyForm(values: Record<string, string>) {
  const body = new URLSearchParams(values).toString();

  const response = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }
}
