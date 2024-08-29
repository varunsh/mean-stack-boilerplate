# mean-stack-boilerplate

Creating basic boilerplate for a mean stack with MySql connector. Added following dependencies:
- express
- mysql (to be deprecated when using sequelize)
- nodemon
-- nodemon.json
- sequelize


setup routes for root ('/') and 'public' folder for static content
1. root : app.get('/', callback)
2. public: app.use(express.static('<public-folder-path>')) // optional- use path.join(dirname, path) to concat the path to public folder
	alternate use app.use('static-file-path', express.static('<public-folder-path>'))

# Install mysql-server
 - sudo apt install mysql-server
 - Create/update user(s) :
 -- https://vitux.com/how-to-install-and-configure-mysql-in-ubuntu/