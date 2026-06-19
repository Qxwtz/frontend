export default function About() {
  const navStyle = {
    padding: '10px 20px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: '0.3s',
  };

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

        <p
          style={{
            color: '#475569',
            fontSize: '18px',
            lineHeight: '1.8',
          }}
        >
          Welcome to the About page!
        </p>
      </div>
    </main>
  );
}