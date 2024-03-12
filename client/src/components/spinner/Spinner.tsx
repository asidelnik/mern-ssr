'use client'
export default function Spinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBlockStart: '200px'

    }}>
      <div style={{
        border: '8px solid hsl(0, 0%, 86%)',
        borderRadius: '50%',
        borderTop: '8px solid hsl(212, 100%, 48%)',
        width: '80px',
        height: '80px',
        animation: 'spin 2s linear infinite'
      }} />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}