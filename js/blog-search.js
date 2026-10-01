const blogSearchForm = document.querySelector('.blog-search');
const blogSearchInput = blogSearchForm?.querySelector('input[name="q"]');
const blogSearchFeedback = document.querySelector('.blog-search-feedback');
const blogArticles = [...document.querySelectorAll('.blog-articles .blog-article')];
const blogPagination = document.querySelector('.blog-pagination');

if (blogSearchForm && blogSearchInput && blogSearchFeedback) {
  const filterArticles = (value) => {
    const query = value.trim().toLocaleLowerCase('en');
    let matches = 0;

    blogArticles.forEach((article) => {
      const visible = !query || article.textContent.toLocaleLowerCase('en').includes(query);
      article.hidden = !visible;
      if (visible) matches += 1;
    });

    blogSearchFeedback.hidden = !query;
    if (blogPagination) blogPagination.hidden = !!query;
    blogSearchFeedback.textContent = !matches
      ? 'No articles found. Try another search.'
      : `${matches} ${matches === 1 ? 'article' : 'articles'} found.`;
  };

  const initialQuery = new URL(window.location.href).searchParams.get('q') || '';
  blogSearchInput.value = initialQuery;
  filterArticles(initialQuery);

  blogSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = blogSearchInput.value.trim();
    const url = new URL(window.location.href);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    window.history.replaceState(null, '', url);
    filterArticles(query);
  });

  blogSearchInput.addEventListener('input', () => {
    if (!blogSearchInput.value.trim()) filterArticles('');
  });
}
