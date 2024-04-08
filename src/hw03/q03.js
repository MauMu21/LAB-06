var link = document.querySelector('a');
link.href = "https://keybr.com";


var root = document.getElementById('root');

var ul = document.createElement('ul');

const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];

  buyList.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  root.appendChild(ul);