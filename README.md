# Leave management system

## Installation
1) Download and install [XAMPP](https://www.apachefriends.org/download.html) or other software that allows you to work on a local server.

2) If you are using XAMPP, clone the repository and extract it to your htdocs folder.

It should look like this:

`F:\xampp\htdocs\leave-management-system`

3) Open XAMPP click on Apache config  and select `httpd.conf`

4) Edit following lines to make them look like this: 

`DocumentRoot "F:/xampp/htdocs/leave-management-system/public"`

`<Directory "F:/xampp/htdocs/leave-management-system/public">`

5) Start Apache server and MySQL

6) Go to localhost/phpmyadmin

7) Create database and name it `leave_system`

8) Import database from `database\leave_system.sql`

9) Go to localhost and you are ready to work :)

## Usage

For full usage see the UserGuide.pdf file
