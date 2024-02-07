import './App.css';
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function App() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <div className="Wrapper">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div style={{ width: '850px' }}>
          <Viewer
            fileUrl={`${process.env.PUBLIC_URL}/50MB-TESTFILE.ORG.pdf`}
            plugins={[
              defaultLayoutPluginInstance,
            ]}
          />
        </div>
      </Worker>
    </div>
  );
}

export default App;
