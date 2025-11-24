const BASE_URL = import.meta.env.MODE === "development"
  ?"http://localhost:8080/api/auth"
  : "https://your-backend.up.railway.app/api";

  VITE_BASE_URL=
VITE_API_URL=


export async function apiPost(path, data) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const body = await res.json();

  if (!res.ok) {
    throw { status: res.status, body };
  }

  return body;
}
