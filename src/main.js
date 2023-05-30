import App from './App';
import router from './routes';

const root = document.querySelector('#root');
root.append(new App().el);
// 요소가 먼저 있어야지 각 요소에 지정할 routes를 만들 수 있다. (즉, router-view가 있어야 한다.)

router();
