// Get references to the image element and the button
const image = document.getElementById('food');
const changeButton = document.getElementById('changeButton');

// Define an array of image objects containing name and src properties
const images = [
    { name: 'image1', src: 'file:///C:/Users/Ph%C6%B0%C6%A1ng%20Anh/OneDrive/Hi%CC%80nh%20a%CC%89nh/A%CC%89nh%20chu%CC%A3p%20ma%CC%80n%20hi%CC%80nh/Screenshot%202024-04-27%20170523.png' },
    { name: 'image2', src: 'file:///C:/Users/Ph%C6%B0%C6%A1ng%20Anh/OneDrive/Hi%CC%80nh%20a%CC%89nh/A%CC%89nh%20chu%CC%A3p%20ma%CC%80n%20hi%CC%80nh/Screenshot%202024-04-27%20174632.png' }
];

// Initialize an index variable to track the current image
let currentIndex = 0;

// Function to change the picture
function changePicture() {
    // Increment the index to get the next image
    currentIndex = (currentIndex + 1) % images.length;
    
    // Update the image source with the new image
    image.src = images[currentIndex].src;
}

// Add event listener to the button to trigger the picture change
changeButton.addEventListener('click', changePicture);