import { Store } from '../core/youjun';

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo:
    'https://lh3.googleusercontent.com/a/AAcHTtcg-XuKSKFMKu4nzKQdS1o-en3j5GsC_-C9I7kUyA=s576-c-no',
  name: 'ReasonJun / Lee Eui Jun',
  email: 'tndhworl1998@gmail.com',
  blog: 'https://reasonjun.tistory.com/',
  github: 'https://github.com/YouJun-IWON',
  repository: 'https://github.com/YouJun-IWON/movie-app',
});
