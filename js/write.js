$('.js-save-btn').on('click', function(){
  NewIdea();
});

function NewIdea (title, body, id, quality){
  var $titleInput = $('.js-title-input').val();
  var $bodyInput = $('.js-body-input').val();
  var $cardId = (Date.now());
  var $quality = ("swill");
  var $formData = [];
  $formData.push($titleInput);
  $formData.push($bodyInput);
  $formData.push($cardId);
  $formData.push($quality);

  var stringed = $formData;

  localStorage.setItem("card-data", JSON.stringify(stringed));

  var retrievedData = localStorage.getItem("card-data");

  var winning = JSON.parse(retrievedData);
  console.log(winning);


};











// this.title = title;
// this.body = body;
// this.id = id;
// this.quality ="swill";

//
// function localData(){
//   var $titleInput = $('.js-title-input').val();
//   var $bodyInput = $('.js-body-input').val();
//   var $formData = [];
//   $formData.push($titleInput);
//   $formData.push($bodyInput);
// }


>>>>>>> master



  // var formData = JSON.stringify($("#form-data").serializeArray());
  //



// Function to create object with all the information
//

// Function to get value of each:
//
// Function to stringify JSON.stringify($titleInput);:
//
// Function to set item localStorage.setItem():
//
// Function to parse JSON.parse()
//


// function newIdea(){
//   $('.card-box').append(
//     `<section class="idea-card">
//     <li> "${$titleInput}" </li>
//     <button class="delete-btn">&#xd7;</button>
//     <li> "${$bodyInput}" </li>
//     <li> "${$cardId}" </li>
//     <button class="up-btn">&#x2191;</button>
//     <button class="down-btn">&#x2193;</button>
//     <li>quality:swill</li>
//   </section>`
//   );
// }

// function localArray(){
//   var $titleInput = $('.js-title-input').val();
//   var $bodyInput = $('.js-body-input').val();
//   var $formData = [];
//   $formData.push($titleInput);
//   $formData.push($bodyInput);
// }
//
// function localSavedData(){
//   var stored = localStorage.setItem('$form-data', JSON.stringify($formData));
//     console.log(stored);
//
// }