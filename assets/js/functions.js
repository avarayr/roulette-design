const $ = window.$
$(document).on('click', '.profile-trigger', function () {
  const modal = $('.modal-profile')
  modal.find('.modal-title').text(`Username with id: ${$(this).data('id')}`)

  // update all the info HERE ----
  // modal.find('.total-won').text('TOTAL WON')
  // ...

  modal.modal('show')
})
