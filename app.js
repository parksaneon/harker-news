const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
    const id = this.location.hash.substring(1);
    ajax.open('GET', CONTENT_URL.replace('@id', id), false);
    ajax.send();

    const newsContent = JSON.parse(ajax.response);
    console.log(newsContent);
});

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = `#${newsFeed[i].id}`;
    a.innerHTML = `${newsFeed[i].title} ${newsFeed[i].comments_count}`;

    li.appendChild(a);
    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);
