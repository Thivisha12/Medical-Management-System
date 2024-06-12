// Event listener for "Branches" link in sidebar
document.querySelector('#sidebar .side-menu.top li:nth-child(4) a').addEventListener('click', function (e) {
    // Navigate to the "/hospital-branch" page
    window.location.href = "/hospital-branch";
});


function addBranch() {
    const branchesContainer = document.getElementById('branches');
    const branchCount = branchesContainer.querySelectorAll('.branch').length;

    const branchDiv = document.createElement('div');
    branchDiv.className = 'branch';
    branchDiv.innerHTML = `
        <h3>Branch ${branchCount + 1}</h3>
         <label for="branchId${branchCount}">Branch ID:</label>
         <input type="text" name="branches[${branchCount}][id]" id="branchId${branchCount}" required><br>
        <label for="branchName${branchCount}">Branch Name:</label>
        <input type="text" name="branches[${branchCount}][name]" id="branchName${branchCount}" required><br>
        <label for="branchAddress${branchCount}">Branch Address:</label>
        <input type="text" name="branches[${branchCount}][address]" id="branchAddress${branchCount}" required><br>
        <label for="branchContact${branchCount}">Branch Contact:</label>
        <input type="text" name="branches[${branchCount}][contact]" id="branchContact${branchCount}" required><br><br>
    `;
    branchesContainer.appendChild(branchDiv);
}

document.querySelectorAll('.side-menu.top li a').forEach(item => {
item.addEventListener('click', function (e) {
e.preventDefault(); // Prevent default link behavior

// Hide all forms except the "Add Doctors" form
document.getElementById('profile-form').classList.add('hidden'); // Hide profile form
document.getElementById('add-doctors-form').classList.add('hidden'); // Hide add doctors form
});
});

document.getElementById('profile-link').addEventListener('click', function (e) {
e.preventDefault(); // Prevent default link behavior

var profileForm = document.getElementById('profile-form');
profileForm.classList.remove('hidden'); // Display profile form
profileForm.scrollIntoView({ behavior: 'smooth' }); // Scroll to profile form section

// Assuming you have a button inside the profile form that triggers the update process
var updateButton = profileForm.querySelector('button[type="submit"]');
updateButton.addEventListener('click', function () {
// Your update logic here...

// After the update is complete, hide the profile form
profileForm.classList.add('hidden');
});
});

document.querySelector('#sidebar .side-menu.top li:nth-child(3) a').addEventListener('click', function (e) {
e.preventDefault(); // Prevent default link behavior

var addDoctorsForm = document.getElementById('add-doctors-form');
if (addDoctorsForm.classList.contains('hidden')) {
// Hide all other forms and display the "Add Doctors" form
document.getElementById('profile-form').classList.add('hidden'); // Hide profile form
addDoctorsForm.classList.remove('hidden'); // Display add doctors form
addDoctorsForm.scrollIntoView({ behavior: 'smooth' }); // Scroll to add doctors form section
} else {
addDoctorsForm.classList.add('hidden'); // Hide add doctors form
}
});


const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
   const li = item.parentElement;

   item.addEventListener('click', function () {
       allSideMenu.forEach(i => {
           i.parentElement.classList.remove('active');
       });
       li.classList.add('active');
   });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
   sidebar.classList.toggle('hide');
});

// TOGGLE SEARCH FORM
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
   if (window.innerWidth < 576) {
       e.preventDefault();
       searchForm.classList.toggle('show');
       if (searchForm.classList.contains('show')) {
           searchButtonIcon.classList.replace('bx-search', 'bx-x');
       } else {
           searchButtonIcon.classList.replace('bx-x', 'bx-search');
       }
   }
});

if (window.innerWidth < 768) {
   sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
   searchButtonIcon.classList.replace('bx-x', 'bx-search');
   searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
   if (this.innerWidth > 576) {
       searchButtonIcon.classList.replace('bx-x', 'bx-search');
       searchForm.classList.remove('show');
   }
});

const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
   if (this.checked) {
       document.body.classList.add('dark');
   } else {
       document.body.classList.remove('dark');
   }
});

document.querySelector('.logout').addEventListener('click', function (e) {
e.preventDefault(); // Prevent default link behavior
// Perform any logout logic here (e.g., clearing session, etc.)
window.location.href = "/"; // Redirect to the login page
});
