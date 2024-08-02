/* Find Alumni*/
		function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
  
          function filterFunction() {
            var input, filter, ul, li, a, i;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            div = document.getElementById("myDropdown");
            a = div.getElementsByTagName("a");
            for (i = 0; i < a.length; i++) {
              txtValue = a[i].textContent || a[i].innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
              } else {
                a[i].style.display = "none";
              }
            }
          }


// alumniprofilepage
          const form = document.getElementById('profile-form');
          const nameInput = document.getElementById('name');
          const usernameInput = document.getElementById('username');
          const emailInput = document.getElementById('email');
  
          form.addEventListener('submit', (e) => {
              e.preventDefault(); 
              const newName = nameInput.value;
              const newUsername = usernameInput.value;
              const newEmail = emailInput.value;
  

              console.log('Updated profile:');
              console.log('Name:', newName);
              console.log('Username:', newUsername);
              console.log('Email:', newEmail);
          });
  
  
  
          const profilePhotoInput = document.getElementById('profile-photo');
  
          profilePhotoInput.addEventListener('change', (event) => {
              const file = event.target.files[0];
              if (file) {
                  console.log('Profile picture:', file.name);
              }
          });

          // create event
function toggleDetails() {
    const details = document.getElementById('event-details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}