const copyButton = document.querySelector('#copy-citation');
const citation = document.querySelector('#bibtex code');
const copyStatus = document.querySelector('#copy-status');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    copyButton.textContent = 'Copied!';
    copyStatus.textContent = 'BibTeX citation copied to clipboard.';
    window.setTimeout(() => { copyButton.textContent = 'Copy citation'; }, 2500);
  } catch {
    copyStatus.textContent = 'Could not copy automatically. Select and copy the citation text.';
  }
});
