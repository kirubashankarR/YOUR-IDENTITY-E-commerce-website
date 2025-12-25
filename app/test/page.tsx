export default function TestPage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Minimal Next.js Test Page</h1>
      <p>This should load very fast</p>
      
      <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px 0', borderRadius: '8px' }}>
        <h3>Test Product</h3>
        <p>Simple product description</p>
        <div style={{ color: '#f60', fontWeight: 'bold', fontSize: '18px' }}>Rs 960.00</div>
        <button style={{ background: '#f60', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}