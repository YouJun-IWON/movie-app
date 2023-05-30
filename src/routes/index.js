import { createRouter } from '../core/youjun';
import Home from './Home';

// 여기서 지정된 component가 app.js의 router-view가 된다.
export default createRouter([{ path: '#/', component: Home }]);
