import { Canvas } from '@react-three/fiber';
import { ARScene } from './components/ARScene';
import { VideoBackground } from './components/VideoBackground';
import { Interface } from './components/Interface';
import { SearchInterface } from './components/SearchInterface';

function App() {
  return (
    <div className="h-screen w-screen">
      <VideoBackground />
      
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ARScene />
      </Canvas>

      <Interface />
      <SearchInterface />
    </div>
  );
}

export default App;