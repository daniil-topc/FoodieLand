document.querySelector('[data-recipe-print]')?.addEventListener('click', () => {
  window.print();
});

document.querySelector('[data-recipe-share]')?.addEventListener('click', async () => {
  const title = document.querySelector('#recipe-title')?.textContent || document.title;
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({ title, url });
    } catch (error) {
      if (error.name !== 'AbortError') console.error('Could not share recipe:', error);
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(url);
    const label = document.querySelector('[data-share-label]');
    label.textContent = 'Copied';
    window.setTimeout(() => { label.textContent = 'Share'; }, 2000);
  } catch (error) {
    console.error('Could not copy recipe link:', error);
  }
});
