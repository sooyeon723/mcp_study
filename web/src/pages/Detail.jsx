import { useNavigate } from 'react-router-dom'

function Detail() {
  const navigate = useNavigate()

  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100%', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          alignItems: 'center',
          textAlign: 'center',
          position: 'absolute',
          left: '35px',
          top: '53px',
          width: '153px',
        }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '18px', color: '#000', margin: 0, width: '100%' }}>
          Hello world!
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', color: '#636363', margin: 0, width: '100%' }}>
          Look for excitement
        </p>
      </div>
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '8px 20px',
          fontSize: '12px',
          cursor: 'pointer',
          border: '1px solid #583fac',
          borderRadius: '4px',
          backgroundColor: '#fff',
          color: '#583fac',
        }}
      >
        뒤로 가기
      </button>
    </main>
  )
}

export default Detail
