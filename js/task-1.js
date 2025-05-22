// 1. Kategorilerin sayısını bul ve yazdır
const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

// 2. Her kategori için başlığı ve alt öğe sayısını yazdır
categoryItems.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});