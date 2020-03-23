# notice_project

In order to run the code on your machine follow the steps listed below:

1. Install nodejs (https://nodejs.org/en/)
2. Install git for terminal interface (https://git-scm.com/)
3. Install VS code (if you don't have a good editor) (https://code.visualstudio.com/)
4. After everything is setup, clone and download the code into your PC.
	4.1 Create a new folder and name it according to your choice for the project.
	4.2 Navigate to that folder using your git command line.
	4.3 Type this commands- 
		a) git config --global user.name "*your github account name".
		b) git config --global user.email "*email-id". 
		c) Now to clone the code from our github repository type = 
			git clone https://github.com/Nilutpal2020/notice_project.git  and press Enter.
		This will clone or download the things from our Github Respository. After cloning you should be able to see a new folder inside your current folder named as "notice_project".
 
5. (optional step) Type "npm init" on the git terminal and set a name if you want and others just press enter and at last type 'yes'. This will create the package.json file if it is not already created on your machine.
6. Go to the folder (notice_project) and open the git terminal and run these commands:
  5.1. npm install express --save (or npm -i express -s)
  5.2. npm install ejs --save
  5.3. npm install body-parser --save
7. After you have installed all the necessary dependencies check the package.json file if all the dependencies have been installed and saved.

  "dependencies": {
    "body-parser": "^1.19.0",
    "ejs": "^3.0.1",
    "express": "^4.17.1"
  }

 (So, if you have followed the instructions listed above you can move on to running the program)
 
 8. Type "node app.js" in the terminal and hit enter. If all the packages have been installed successfully you will see a message "Server has started!".
 9. Now go to any browser and run this url (localhost:3000 or 127.0.0.1:3000)
 
 All done!!! Enjoy...
