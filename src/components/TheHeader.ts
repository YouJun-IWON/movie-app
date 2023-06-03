import { Component } from '../core/youjun';

interface State {
  [key: string]: unknown;
  menus: {
    name: string;
    href: string;
  }[];
}

export default class TheHeader extends Component {
  public state!: State; // 초기화되어 있지 않지만 !를 할당해서 초기화가 된 것처럼 선언한다.
  //! public state = {} as State로 선언하면 추후 빈 객체에 따라 잘못된 결과물이 나올 수 있다. 
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/',
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988',
          },
          {
            name: 'About',
            href: '#/about',
          },
        ],
      },
    });
    // 페이지가 바뀔 때마다 새로 랜더링 => class active 적용
    window.addEventListener('popstate', () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
    <a href="#/" class="logo">
      <span>OMDbAPI</span>.COM
    </a>
    <nav>
      <ul>
        ${this.state.menus
          .map((menu) => {
            // Address of page to move to
            const href = menu.href.split('?')[0];
            // address of real page
            const hash = location.hash.split('?')[0];
            const isActive = href === hash;

            return /* html */ `
          <li>
            <a href="${menu.href}" class="${isActive ? 'active' : ''}">
              ${menu.name}
            </a>
          </li>
          `;
          })
          .join('')}
      </ul>
    </nav>
    <a href="#/about" class="user">
      <img src="https://lh3.googleusercontent.com/a/AAcHTtcg-XuKSKFMKu4nzKQdS1o-en3j5GsC_-C9I7kUyA=s576-c-no" alt="User">
    </a>
    `;
  }
}
