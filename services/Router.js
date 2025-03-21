// Implementing a router in vanilla JS
const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        // const url1 = event.target.href;
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });

    // Event handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // Check the initial url
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to "${route}"`);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.productId = paramId;
        }
    }

    if (pageElement) {
      // const cache = document.querySelector("main");
      // document.querySelector("main").children[0].remove();
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    } else {
      // 404
      document.querySelector("main").innerHTML = "Oops, 404!";
    }
  },
};

export default Router;
