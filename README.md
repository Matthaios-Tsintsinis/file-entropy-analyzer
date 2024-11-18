# File Entropy Analyzer  

A lightweight desktop app to calculate and visualize file entropy using Electron.js. The app allows users to upload a file, set the precision of entropy values, and provides a detailed breakdown of the entropy for each character in the file.

---

## Features  
- **File Entropy Calculation**: Upload a file and instantly calculate its entropy.  
- **Precision Control**: Adjust the number of decimal places displayed using an intuitive slider.  
- **Character Breakdown**: View the entropy of each character in the file.  
- **Cross-Platform**: Runs on Windows, macOS, and Linux using Electron.js.  

---

## Screenshots  
![image](https://github.com/user-attachments/assets/df46a54f-fc0f-4dd6-ae6a-6fd284566bfd)

---

## Installation  

### Prerequisites  
- [Node.js](https://nodejs.org) installed on your system.  
- A package manager like npm or yarn.  

### Steps  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Matthaios-Tsintsinis/file-entropy-analyzer.git
   cd file-entropy-analyzer

2. Install dependencies:
   ```bash
   npm install

3. Start the app:
   ```bash
   npm start

## Usage
1. Open the app.
2. Drag and drop a file or use the file upload button.
3. Adjust the slider to set the desired precision of entropy values.
4. View the overall file entropy and per-character entropy breakdown.

## How It Works
The app calculates entropy using the formula:

𝐻(𝑋)=−∑𝑖=1𝑛𝑃(𝑥𝑖)log2𝑃(𝑥𝑖)

Where:
* 𝑃(𝑥𝑖) is the probability of a character 𝑥𝑖 in the file.
  
Entropy is displayed with user-defined precision for better readability.

## Development
###Project Structure
* `main.js`: Entry point for the Electron app.
* `index.html`: Main UI for the app.
* `styles.css`: Styling for the interface.
* `index.js`: Logic for file processing and entropy calculations.

### Scripts
* `npm start`: Starts the Electron app.
* `npm run build`: Builds the app for distribution.

### Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
3. Commit your changes:
   ```bash
   git commit -m "Add feature name"
4. Push to the branch:
   ```bash
   git push origin feature-name
5. Create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Credits
Built with ❤️ using Electron.js, HTML, CSS, and JavaScript.
