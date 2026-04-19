import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

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
      <button
        onClick={() => navigate('/detail')}
        style={{
          padding: '10px 24px',
          fontSize: '12px',
          cursor: 'pointer',
          backgroundColor: '#583fac',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          flexShrink: 0,
        }}
      >
        페이지 이동
      </button>
    </main>
  )
}

export default Home
