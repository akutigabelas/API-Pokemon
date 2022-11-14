var a = 50
console.log(a);

let array=[1,2,3,4,5];
console.log(array);
//object
let mhs={
    nim:"1402018105",
    name:"adam",
    hobi:['a', 'b', 'c'],
    isActive: true
}
console.log(mhs.hobi[2]);
//array of object
const user = {};
user.username = "andrew";
user.password = "123";
console.log(user);

const animals = [
    {name:"budi", species:"dog", class:{name: "mamalia"}},
    {name:"nemo", species:"fish", class:{name:"invetebrata"}},
    {name:"bayu", species:"dog", class:{name:"mamalia"}},
    {name:"jalin", species:"dog", class:{name:"mamalia"}},
    {name:"dory", species:"fish", class:{name:"invetebrata"}}
]
// var i = 0;
var onlyDog;
var onlyFish;
animals.forEach(Element=> {
    if(Element.species == "dog"){
        onlyDog = Element;
        console.log(onlyDog);
    }
})

animals.forEach(element => {
    if(element.species == "fish"){
        element.class.name ="ovipar";
        console.log(element);
    }
} 
)

$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/",
    // urll: "https://pokeapi.co/api/v2/pokemon-species/",
}).done((res)=>{
    // console.log(res.results);
    
// })
    let temp="";
    let data="";
    $.each(res.results,function(key,val){
        // literal template
        temp += `<tr>
        <td>${key+1}</td>
        <td>${val.name}</td>
        <td><button class="btn btn-primary" onclick="pokenama('${val.url}')" data-bs-toggle="modal" data-bs-target="#pokedetail">Detail</button></td>
        </tr>`, 
        `<li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" onclick="opentab('${val.url}')" data-bs-toggle="tab" data-bs-target="#stats" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" onclick="opentab('${val.url}')" data-bs-toggle="tab" data-bs-target="#move" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
      </li>`;        
    })

    $("#pokemonid").html(temp);
    // $("#myTabContent").html(temp);

}).fail((err)=>{
    console.log(err);
});

function pokenama(url){
    $.ajax({
        url: url
    }).done((res)=>{
        $(".modal-title").html(res.name.toUpperCase());
        // $(".abt").html(res.flavor_text_entries[0].flavor_text);
        // console.log(res.species.url.flavor_text_entries)
        // $(".gambar").html(res.sprites.front_default);
        // console.log(res.sprites.front_default);
    //    `<img src=${res.sprites.front_default}>`
        $(".hp").html(res.stats[0].base_stat);
        $(".attack").html(res.stats[1].base_stat);
        $(".defense").html(res.stats[2].base_stat);
        $(".special-attack").html(res.stats[3].base_stat);
        $(".special-defense").html(res.stats[4].base_stat);
        $(".speed").html(res.stats[5].base_stat);
        $(".move1").html(res.moves[0].move.name);
        $(".move2").html(res.moves[1].move.name);
        $(".move3").html(res.moves[2].move.name);
        $(".move4").html(res.moves[3].move.name);
        $(".move5").html(res.moves[4].move.name);
        $(".height").html(res.height);
        $(".weight").html(res.weight);
        $(".grass").html(res.types[0].type.name);
        // $(".poison").html(res.types[1].type.name);


         // Picture
            let pict = "";
            pict = `
                <img src="${res.sprites.other.dream_world.front_default}" class="d-block w-100" height="200" alt="...">`
            $(".img").html(pict);
            console.log(pict);


    });
}

function opentab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  $(document).ready(function(){
    // Open modal on page load
    // $("#myModal").modal('show');

    // Close modal on button click
    $(".close").click(function(){
        $("#pokedetail").modal('hide');
    });
});
  $(document).ready(function(){
    // Open modal on page load
    // $("#myModal").modal('show');

    // Close modal on button click
    $(".btn").click(function(){
        $("#pokedetail").modal('hide');
    });
});
// var result = animals.filter(x=>{
//     return x.species == "anjing"
// })
//     console.log(result);
    

// if(animals.species > 0){
//     console.log(animal.species("dog"));
// }

// console.log(animals.species("dog"));

// let judul = document.getElementById("lorem");
// console.log(judul);
// judul.style.backgroundColor = "red";