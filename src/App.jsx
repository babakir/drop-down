import MultiSelectDropdown from './components/drop-down/drop-down';

function App() {
  const handleFilesChange = (files) => {
    console.log('Selected files:', files);
  };

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <h1>Custom Multi Select Dropdown</h1>
        <MultiSelectDropdown onChange={handleFilesChange} />
      </div>
    </>
  )
}

export default App
