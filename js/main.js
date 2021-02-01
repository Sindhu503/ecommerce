fetch("https://sindhu503.github.io/ecommerce/data/data.json").then(response=>{
    return response.json()
}).then(data=>{
    console.log(data)
    displayData(data)
})
// function  displayData(info){
//     console.log(info.mobiles[info.mobiles.length-1])

// unction displayData(info){
//     var div=document.getElementsByClassName("div");
//     console.log(div[0])
//     function displayData(info){
//         var element=document.getElementsByTagName("div");
//         console.log(element[1].innerHTML);
// }
// function displayData(info){
//     var element=document.querySelectorAll("element");
//     console.log(element[1];
//     }
//     function displayData(info){
//         var nodeData=document.querySelectorAll()/         console.log(div[0]);
//    }
    // function displayData(info){
    //     var bodyElement=document.querySelector("body")
    //     var newElement=document.createElement("p")
    //     newElement.textContent="Sindhu"
    //     console.log(newElement)
    //     bodyElement.append(newElement)
    //         var sampleElement=document.createElement("img")
    //         console.log(sampleElement)
    //         sampleElement.src="img/1.jpg";
    //         var bodyElement=document.querySelector("body");

    //         bodyElement.append(sampleElement)
    //     }
    function displayData(info){
    	var bodyElement=document.querySelector("body")
    	var row=document.createElement("section")
    	row.classList.add("row","justify-content-center")
    	bodyElement.append(row)
    	info.mobiles.map(value=>{
    		var column=document.createElement("article")
    		column.classList.add("col-sm-10","col-md-6","col-lg-3");
    		row.append(column)
    		//card 
    		var card=document.createElement("div");
    		card.classList.add("card","mt-5")

    		//card - body
    		var cardBody=document.createElement("div");
    		cardBody.classList.add("card-body");

    		//Image
    		var imageElement=document.createElement("img");
    		imageElement.src=value.image;
    		imageElement.classList.add("img-responsive")
    		imageElement.alt=value.name;

    		cardBody.append(imageElement)

    		//name
    		var name=document.createElement("h2")
    		name.textContent=value.name;
    		name.classList.add("text-center","text-primary")

    		//price
    		var price=document.createElement("p");
    		price.classList.add("text-danger","text-center");
    		price.innerHTML="<s>₹" +value.price+"/-</s>";


            //oPrice
    		var oPrice=document.createElement("p");
    		oPrice.classList.add("text-danger","text-center");
    		oPrice.innerHTML="<b>₹" +value.oPrice+"/-</b>";

    		//button
    		var buttonParent=document.createElement("div");
    		buttonParent.classList.add("d-grid","gap-2");
    		var button=document.createElement("button");
    		button.classList.add("btn","btn-block","btn-primary",);
    		button.textContent="Add to cart";
    		buttonParent.append(button);
    		cardBody.append(imageElement);
    		

    		cardBody.append(name)
    		cardBody.append(price)
    		cardBody.append(oPrice);
    		cardBody.append(buttonParent);
    		card.append(cardBody);
    		column.append(card);
    	})
    }
