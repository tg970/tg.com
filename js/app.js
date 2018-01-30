//console.log($());

const hideOthers = (id) => {
  let $divs = $('.content')
  for (let div of $divs) {
    let $div = $(div)
    //console.log(id, $div.attr('id'));
    if ($div.attr('id') != id) {
      $div.children().hide('slow')
    }
  }
}

const showDiv = (event) => {
  //console.log('showNav firing');
  let $item = $(event.currentTarget).children();
  $item.show(`slow`)
  let id = $(event.currentTarget).attr('id')
  hideOthers(id)
  $(event.currentTarget).off()
  $(event.currentTarget).on('click',unShowDiv)
}

const unShowDiv = (event) => {
  console.log($(event.currentTarget).attr('class'));
  let $item = $(event.currentTarget).children();
  $item.hide('slow')
  $(event.currentTarget).off()
  $(event.currentTarget).on('click',showDiv)
}

const prevent = (event) => {
  event.stopPropagation();
}


$(() => {

$('.content').on('click', showDiv)
$('.projectImg').on('click', prevent)

})
