const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');
    const images = document.querySelectorAll('img');

    // Links hover effect
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#28a745';  // Change color to green on hover
            link.style.textDecoration = 'underline';  // Underline on hover
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white';  // Reset color
            link.style.textDecoration = 'none';  // Remove underline
        });
    });

    // Buttons hover effect
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#218838';  // Darker green on hover
            button.style.transform = 'scale(1.05)';  // Slightly enlarge the button
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#28a745';  // Reset background color
            button.style.transform = 'scale(1)';  // Reset size
        });
    });

    // Images hover effect
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';  // Slightly enlarge the image on hover
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';  // Reset size
        });
    });


    // this is dicount offer tag 
  
    
