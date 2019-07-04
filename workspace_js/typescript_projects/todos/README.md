It's example project for web-package

1. For creating package json file enter 

	npm init
		after enter what necessary

2. Install typescript locally
	
	npm install typescript webpack --save -dev
						for save dev dependecies
						Usage of the `--dev` option is deprecated. Use `--only=dev` instead.
	npm install typescript webpack --save -only=dev

Now package file got "dependencies" object

3. Install loader for basically connect web-pack and typescript
	
	npm install ts-loader --save -only=dev

Now created field "ts-loader"

4. Promise

	npm install es6-promise --save -only=dev

Now created field "es6-promise"

5. Jquery
	npm install jquery --save

Now created field "jquery"

6. Install server

	npm install live-server -g
				-g means global	
		need permission, so for linux enter sudo before command

7. Create folder for development files

8. Create config file

9. Install definition manager

	npm install tsd -g

		Need permission
	
	deprecated:tsd install jquery --save
	npm install --save @types/jquery

	deprecated:tsd install es6-promise --save
	npm install --save @types/es6-promise

10. Create ts config file 
	loaders is deprecated use rules
	use __dirname + './example_folder' for absolute path

11. Work with you app

12. Added script into package file // 8080 by default for server

13. Run webpack
	webpack -w

14. Use script



