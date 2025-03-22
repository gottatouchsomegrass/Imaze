document.addEventListener("DOMContentLoaded",function(){
    searchBox=document.getElementById('searchBox');
    searchText=document.getElementById('searchText')
    searchBox.addEventListener('submit',function(e){
        e.preventDefault();
        let input=searchText.value.trim();
        console.log(input)
    })
})