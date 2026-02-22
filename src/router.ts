export type PageName = 'home' | 'artist' | 'dashboard' | 'campaign' | 'marketplace' | 'established';

interface Page {
  name: PageName;
  render: () => HTMLElement;
}

class Router {
  private pages: Map<PageName, Page> = new Map();
  private currentPage: PageName = 'home';
  private appContainer: HTMLElement;

  constructor(appContainer: HTMLElement) {
    this.appContainer = appContainer;
  }

  register(page: Page): void {
    this.pages.set(page.name, page);
  }

  navigate(pageName: PageName): void {
    const page = this.pages.get(pageName);
    if (!page) {
      console.error(`Page not found: ${pageName}`);
      return;
    }

    this.currentPage = pageName;
    this.appContainer.innerHTML = '';
    const pageElement = page.render();
    this.appContainer.appendChild(pageElement);

    // Update navigation active state
    document.querySelectorAll('.nav a').forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === pageName) {
        link.classList.add('active');
      }
    });

    // Scroll to top
    window.scrollTo(0, 0);
  }

  getCurrentPage(): PageName {
    return this.currentPage;
  }
}

export default Router;
