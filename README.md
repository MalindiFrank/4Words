# 4-Words-A-Day

# 4 Words

4Words is a simple web application that displays 4 random words a day, with interactive features. Users can swipe or tap to view next word, and alter background colors. The idea for the application is a minimal and user-friendly interface. 
Feel free to add any improvements. [Check It Out!](https://4words.netlify.app/)

# Some Features To Note

- **Swipe and Tap Interactions**: Utilizes Hammer.js to detect swipe and tap gestures.
- **Dynamic Background Colors**: Changes background colors randomly from a predefined set.

# An Even Better Web Feature 

- Project includes `manifest.webmanifest`: Web app manifest for progressive web app features.
  - The site can be installed as an app in any device and still feel and look the same, [Try It!](https://4words.netlify.app/)

# How It Actually Works

- **Fetching Words**: On page load and whenever the page is refreshed, a list of 4words is fetched from the API endpoint `https://fourapi.onrender.com/words`.
- **Swipe Gestures**:
  - Swiping right displays the previous word(s), continuous right swiping will keep revealing words you've seen so far
  - Swiping left fetches next word for the day.
    
- **Tap Gestures**:
  - Double-tapping or panning/swiping up or down changes the background color.

# Dependencies

- [Hammer.js](https://hammerjs.github.io/): For gesture detection.

# Troubleshooting

- If the application shows "Site can't be reached," ensure you have an active internet connection.
- If background colors or quote interactions are not working well, check for errors in the browser console.

# Acknowledgements

- Thanks to the creators of Hammer.js for the gesture detection library.
- The API used in this project is provided by [4API Server](https://fourapi.onrender.com)  -  [Github repo](https://github.com/MalindiFrank/4api).
_________________________________________
