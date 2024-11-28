import { useEffect } from "react";
import Body from './Body';

function ProyectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div style={{ color: 'white', width: '100%' }}>
      <Body />
    </div>
  );
}

export default ProyectsPage;
