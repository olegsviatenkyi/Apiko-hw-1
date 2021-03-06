let postList = document.getElementById('postList');
let comments = document.getElementById('comments');
let postCreators = document.getElementById('postCreators');
let ul1 = document.getElementById('ul1');
let ul2 = document.getElementById('ul2');
let ul3 = document.getElementById('ul3');

  const API_ENDPOINT1 = 'https://jsonplaceholder.typicode.com/posts';
  fetch(API_ENDPOINT1)
  .then(response => response.json())
  .then(data => {
    data.forEach(function(element) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      ul1.appendChild(li);
      p.innerText =  element.body;
      a.innerText = "link";
      a.href = API_ENDPOINT1 + "/" + element.id;
      h3.innerText =  element.title.toUpperCase();
      li.appendChild(h3);
      li.appendChild(a);
      li.insertBefore(p, a);
      h3.addEventListener('click', function(event){
        if(p.style.display != 'block' ){
          p.style.display = 'block';
        }
        else {
          p.style.display = 'none';
        }
      }, false);
    });
  })
  .catch(error => console.error(error));
postList.addEventListener('click', function(event){
  ul1.style.display = 'block';
  ul2.style.display = 'none';
  ul3.style.display = 'none';
  postCreators.style.color = 'black';
  postList.style.color = 'green';
  comments.style.color = 'black';
}, false);

  const API_ENDPOINT2 = 'https://jsonplaceholder.typicode.com/comments';
  fetch(API_ENDPOINT2)
  .then(response => response.json())
  .then(data => {
    data.forEach(function(comment) {
      let li = document.createElement('li');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let a = document.createElement('a');
      a.innerText = "link";
      a.href = API_ENDPOINT2 + "/" + comment.id;
      let em = document.createElement('em');
      h3.innerText =  comment.name.toUpperCase();
      em.innerText = "email: " + comment.email;
      p.innerText =  comment.body;
      li.appendChild(h3);
      li.appendChild(a);
      li.appendChild(em);
      li.appendChild(p);
      
      ul2.appendChild(li);
      h3.addEventListener('click', function(event){
        if(p.style.display != 'block' ){
          p.style.display = 'block';
        }
        else {
          p.style.display = 'none';
        }
      }, false);
    });
  })
  .catch(error => console.error(error));
comments.addEventListener('click', function(event){
  ul2.style.display = 'block';
  ul1.style.display = 'none';
  ul3.style.display = 'none';
  postCreators.style.color = 'black';
  postList.style.color = 'black';
  comments.style.color = 'green';
}, false);

  const API_ENDPOINT3 = 'https://jsonplaceholder.typicode.com/posts';
  fetch(API_ENDPOINT3)
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < data.length; i = i + 10){
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.innerText = "user" + data[i].userId;
      a.href = API_ENDPOINT3 + "?userId=" + data[i].userId;
      ul3.appendChild(li);
      li.appendChild(a);
    }
  })
  .catch(error => console.error(error));
postCreators.addEventListener('click', function(event){
  ul3.style.display = 'block';
  ul1.style.display = 'none';
  ul2.style.display = 'none';
  postCreators.style.color = 'green';
  postList.style.color = 'black';
  comments.style.color = 'black';
}, false);
