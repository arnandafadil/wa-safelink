
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a[href*='chat.whatsapp.com/']");
  links.forEach(link => {
    const match = link.href.match(/chat\.whatsapp\.com\/([A-Za-z0-9]+)/);
    if (match) {
      link.href = 'https://afadilm.blogspot.com/p/go.html?id=' + match[1];
    }
  });
});
