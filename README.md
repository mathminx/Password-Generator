# Challenge 3 - JavaScript Password Generator

https://mathminx.github.io/Password-Generator/

## Description
This application was built to enable employees to generate strong passwords that provide greater security. The application creates random passwords based on criteria chosen by the employees from the options presented to them by the application. This app runs in the browser, and is powered by JavaScript code that dynamically updates HTML and CSS. 

It is worth noting that the minimum and maximum lengths are stored in variables rather than hard-coded; I chose to do this in case the minimum and/or maximum password lengths change in the future. Should this happen, the script can be updated simply by changing the values of the variables. 

## Installation
The project is deployed via GitHub Pages.

## Usage:

The user clicks the button to generate a password.
![image](https://user-images.githubusercontent.com/122234007/216850741-52ee757e-733f-4d43-9e7e-d712a8837543.png)


The user is prompted to input a length for the password. The user chooses a length of at least 8 characters and no more than 128 characters. The input is validated to ensure that only whole numbers between 8 and 128 are accepted. 
![image](https://user-images.githubusercontent.com/122234007/216851271-7a28ae1c-542c-43f6-b92c-0db6fdff1f34.png)


The user is presented with a series of prompts for selecting password criteria: lowercase, uppercase, numeric, and special characters. For each criteria prompt, the user selects whether or not to include the character type in the password. The user input is validated to endure that only Y or N responses are accepted.
![image](https://user-images.githubusercontent.com/122234007/216850854-3d2acb27-4d40-4298-9085-da88eb9aa13e.png)


After all prompts have been answered, the user input is validated to ensure that at least one character type has been selected. Once the input has passed validation, a password is generated that matches the selected criteria. The password is written to the page.
![image](https://user-images.githubusercontent.com/122234007/216851146-4b4c45c6-df30-4378-8843-e57016470bb2.png)

At any point, if the user clicks the Cancel button, the process stops and a "cancelled" message is displayed. 
![image](https://user-images.githubusercontent.com/122234007/216851659-618049e3-dd8b-4a8f-92ff-6a3040394e32.png)


## Credits

The style.css and index.html files were provided.

## License

MIT License

## Badges

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

