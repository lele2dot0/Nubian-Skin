/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "85%";
  document.getElementById("main").style.marginLeft = "85%";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

$('.btn.edit-address').click(function() {
  $(this).hide();
  $(this).parents('td').siblings('.address-edit').show();
  $(this).siblings('.btn.edit-address-cancel').show();
  $(this).siblings('.btn.edit-address-submit').show();
  $(this).siblings('.btn.delete-address').hide();
  $(this).parents('td').siblings('.address-record').hide()
});

$('.btn.edit-address-submit').click(function() {
  $(this).hide();
  $(this).parents('td').siblings('.address-edit').hide();
  $(this).siblings('.btn.edit-address-cancel').hide();
  $(this).siblings('.btn.edit-address').show();
  $(this).siblings('.btn.delete-address').show();
  $(this).parents('td').siblings('.address-record').show()
});

$('.btn.edit-address-cancel').click(function() {
  $(this).hide();
  $(this).parents('td').siblings('.address-edit').hide();
  $(this).siblings('.btn.edit-address-submit').hide();
  $(this).siblings('.btn.edit-address').show();
  $(this).siblings('.btn.delete-address').show();
  $(this).parents('td').siblings('.address-record').show()
});

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links'); 
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	})
}

const app = ()=> {
	navSlide();
}