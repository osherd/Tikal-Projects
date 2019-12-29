class ShowsAPI {
  url = "http://api.tvmaze.com/search/shows?q=";
  cache = {};

  async fetchData(query) {
    if (this.cache[query]) {
      return this.cache[query];
    }

    const response = await fetch(this.url + query);
    const data = await response.json();
    const transformed = data.map(item => {
      const { show } = item;
      return {
        id: show.id,
        title: show.name,
        description: show.summary,
        score: item.score
      };
    });

    this.cache[query] = transformed;
    return transformed;
  }
}

const api = new ShowsAPI();

api.fetchData("l");
setTimeout(() => api.fetchData("lo"), 10);
setTimeout(() => api.fetchData("los"), 20);
setTimeout(() => api.fetchData("lost"), 30);