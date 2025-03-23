document.addEventListener("DOMContentLoaded",function(){
    let accessKey="kU1LJbx6eOLL005TOQNhNHZe54e57nzicrYIK9BC0PY";
    let searchBox=document.getElementById('searchBox');
    let searchText=document.getElementById('searchText')
    let gallery=document.getElementById('gallery');
    let forward=document.getElementById('forward');
    let backward=document.getElementById('backward');
    let counter = 1;
    forward.addEventListener('click', () => {
        if(searchText.value.trim()!=''){
            counter++;
            searchImage(searchText.value.trim());
        }
    });
    backward.addEventListener('click', () => {
        if (counter != 1) {
            if(searchText.value.trim()){
                counter--;
                searchImage(searchText.value.trim());
            }
        }
    });

    searchBox.addEventListener('submit', function(e){
        e.preventDefault();
        let input = searchText.value.trim()
        counter = 1; // reset counter on new search
        if(input!=''){
            searchImage(input);
        }
    });

    function searchImage(input){
        let page = counter;
        let searchUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${input}&page=${page}&per_page=30`;
        fetch(searchUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            showImages(data);
        }).catch((error) => { console.log("error occured: " + error) });
        document.getElementById('pgno').innerHTML=`${page}`;
    };

    function showImages(data){
        gallery.innerText = '';
        gallery.className = "w-screen px-6 mt-24 text-center columns-2 sm:columns-3 md:columns-4";
        data.results.forEach((item, index) => {
            let img = document.createElement('img');
            img.src = item.urls.regular;
            img.className = "object-cover h-[100%] w-[100%] mr-4 mb-4 rounded-md";
            gallery.appendChild(img);
        });
    };
});