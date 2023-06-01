import { Component } from '../core/youjun';

export default class TheHeader extends Component {
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
