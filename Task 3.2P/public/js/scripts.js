const cardList = [
    {
    title: "Lavender",
    image: "images/lav.jpg",
    link: "About Lavender",
    desciption: "This is the new information about flowers"
    },
    {
    title: "Lily",
    image: "images/lily.jpg",
    link: "About Lily",
    desciption: "This is the new information about flowers"
    },
    {
        title: "Rhododendron",
        image: "images/rodo.jpg",
        link: "About Rhododendron",
        desciption: "This is the new information about flowers"
    },
    {
        title: "Rose",
        image: "images/rose.jpg",
        link: "About Rose",
        desciption: "This is the new information about flowers"
    },
    {
        title: "Sunflower",
        image: "images/sunflower.jpeg",
        link: "About Sunflower",
        desciption: "This is the new information about flowers"
    }
    ]
    const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
    }
    const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.email = $('#email').val();
    formData.contact = $('#contact').val();
    console.log("Form Data Submitted: ", formData);
    }
    const addCards = (items) => {
    items.forEach(item => {
    let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
    '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
    '<p class="card-text">'+item.desciption+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
    });
    }
    $(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
    submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
    });
    