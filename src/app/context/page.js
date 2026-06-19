"use client";

import { useUser } from "../context/UserContext";

function UserProfile() {
  const { user, setUser } = useUser();

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '18px', color: '#334155' }}>
        User: <strong>{user?.name || 'No user set'}</strong>
      </p>
      <button
        onClick={() => setUser({ name: 'First' })}
        style={{
          padding: '10px 20px',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          marginRight: '10px',
        }}
      >
        Set User
      </button>
      <button
        onClick={() => setUser(null)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#dc2626',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Clear User
      </button>
    </div>
  );
}

export default function ContextPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
        padding: '40px',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <UserProfile />
      </div>
    </main>
  );
}
        