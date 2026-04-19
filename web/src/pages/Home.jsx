function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '39px', width: '100%' }}>
      <div
        style={{
          width: '100%',
          height: '197px',
          flexShrink: 0,
          background: 'linear-gradient(to bottom, #cc8484, #e76997)',
        }}
      />
      <div
        style={{
          backgroundColor: '#583fac',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', color: '#fff', margin: 0, whiteSpace: 'nowrap' }}>
          Hello world!
        </p>
      </div>
      <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', color: '#636363', textAlign: 'center', width: '100%', flexShrink: 0 }}>
        Look for excitement
      </p>
    </main>
  )
}

export default Home
