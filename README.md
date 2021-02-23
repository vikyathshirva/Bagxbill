# Bagxbill

📦Bagxbill
 ┣ 📂.git
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜applypatch-msg.sample
 ┃ ┃ ┣ 📜commit-msg.sample
 ┃ ┃ ┣ 📜fsmonitor-watchman.sample
 ┃ ┃ ┣ 📜post-update.sample
 ┃ ┃ ┣ 📜pre-applypatch.sample
 ┃ ┃ ┣ 📜pre-commit.sample
 ┃ ┃ ┣ 📜pre-merge-commit.sample
 ┃ ┃ ┣ 📜pre-push.sample
 ┃ ┃ ┣ 📜pre-rebase.sample
 ┃ ┃ ┣ 📜pre-receive.sample
 ┃ ┃ ┣ 📜prepare-commit-msg.sample
 ┃ ┃ ┗ 📜update.sample
 ┃ ┣ 📂info
 ┃ ┃ ┗ 📜exclude
 ┃ ┣ 📂logs
 ┃ ┃ ┣ 📂refs
 ┃ ┃ ┃ ┣ 📂heads
 ┃ ┃ ┃ ┃ ┗ 📜master
 ┃ ┃ ┃ ┗ 📂remotes
 ┃ ┃ ┃ ┃ ┗ 📂origin
 ┃ ┃ ┃ ┃ ┃ ┗ 📜HEAD
 ┃ ┃ ┗ 📜HEAD
 ┃ ┣ 📂objects
 ┃ ┃ ┣ 📂info
 ┃ ┃ ┗ 📂pack
 ┃ ┃ ┃ ┣ 📜pack-2c5267dccabe75d34fffa3da9b68044434c29356.idx
 ┃ ┃ ┃ ┗ 📜pack-2c5267dccabe75d34fffa3da9b68044434c29356.pack
 ┃ ┣ 📂refs
 ┃ ┃ ┣ 📂heads
 ┃ ┃ ┃ ┗ 📜master
 ┃ ┃ ┣ 📂remotes
 ┃ ┃ ┃ ┗ 📂origin
 ┃ ┃ ┃ ┃ ┗ 📜HEAD
 ┃ ┃ ┗ 📂tags
 ┃ ┣ 📜HEAD
 ┃ ┣ 📜config
 ┃ ┣ 📜description
 ┃ ┣ 📜index
 ┃ ┗ 📜packed-refs
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂backend
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜db.js
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜orderController.js
 ┃ ┃ ┣ 📜productController.js
 ┃ ┃ ┗ 📜userController.js
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜products.js
 ┃ ┃ ┗ 📜user.js
 ┃ ┣ 📂middleware
 ┃ ┃ ┣ 📜authMiddleware.js
 ┃ ┃ ┗ 📜errorMiddleware.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜orderModel.js
 ┃ ┃ ┣ 📜productModel.js
 ┃ ┃ ┗ 📜userModel.js
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜orderRoutes.js
 ┃ ┃ ┣ 📜productRoutes.js
 ┃ ┃ ┣ 📜uploadRoutes.js
 ┃ ┃ ┗ 📜userRoutes.js
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜generateToken.js
 ┃ ┣ 📜seeder.js
 ┃ ┗ 📜server.js
 ┣ 📂frontend
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📜airpods.jpg
 ┃ ┃ ┃ ┣ 📜alexa.jpg
 ┃ ┃ ┃ ┣ 📜applewatch.jpg
 ┃ ┃ ┃ ┣ 📜bare.jpg
 ┃ ┃ ┃ ┣ 📜br.jpg
 ┃ ┃ ┃ ┣ 📜camera.jpg
 ┃ ┃ ┃ ┣ 📜camw.jpg
 ┃ ┃ ┃ ┣ 📜gopo.jpg
 ┃ ┃ ┃ ┣ 📜gtab.jpg
 ┃ ┃ ┃ ┣ 📜i7.jpg
 ┃ ┃ ┃ ┣ 📜iphone.jpg
 ┃ ┃ ┃ ┣ 📜macbook.jpg
 ┃ ┃ ┃ ┣ 📜mouse.jpg
 ┃ ┃ ┃ ┣ 📜oneplus.jpg
 ┃ ┃ ┃ ┣ 📜opp.jpg
 ┃ ┃ ┃ ┣ 📜phone.jpg
 ┃ ┃ ┃ ┣ 📜playstation.jpg
 ┃ ┃ ┃ ┣ 📜ram.jpg
 ┃ ┃ ┃ ┣ 📜sample.jpeg
 ┃ ┃ ┃ ┣ 📜sony.jpg
 ┃ ┃ ┃ ┣ 📜spsn.jpg
 ┃ ┃ ┃ ┣ 📜tvtv.jpg
 ┃ ┃ ┃ ┣ 📜way.jpg
 ┃ ┃ ┃ ┣ 📜wd.jpg
 ┃ ┃ ┃ ┗ 📜zotac.jpg
 ┃ ┃ ┣ 📜android-chrome-192x192.png
 ┃ ┃ ┣ 📜android-chrome-512x512.png
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┣ 📜favicon-16x16.png
 ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┣ 📜logo192.png
 ┃ ┃ ┣ 📜logo512.png
 ┃ ┃ ┣ 📜manifest.json
 ┃ ┃ ┗ 📜robots.txt
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂actions
 ┃ ┃ ┃ ┣ 📜cartActions.js
 ┃ ┃ ┃ ┣ 📜orderActions.js
 ┃ ┃ ┃ ┣ 📜productActions.js
 ┃ ┃ ┃ ┗ 📜userActions.js
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜CheckoutSteps.js
 ┃ ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┃ ┣ 📜FormContainer.js
 ┃ ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┃ ┣ 📜Loader.js
 ┃ ┃ ┃ ┣ 📜Message.js
 ┃ ┃ ┃ ┣ 📜Meta.js
 ┃ ┃ ┃ ┣ 📜Paginate.js
 ┃ ┃ ┃ ┣ 📜Product.js
 ┃ ┃ ┃ ┣ 📜ProductCarousel.js
 ┃ ┃ ┃ ┣ 📜Rating.js
 ┃ ┃ ┃ ┗ 📜SearchBox.js
 ┃ ┃ ┣ 📂constants
 ┃ ┃ ┃ ┣ 📜CartConstants.js
 ┃ ┃ ┃ ┣ 📜orderConstants.js
 ┃ ┃ ┃ ┣ 📜productConstants.js
 ┃ ┃ ┃ ┗ 📜userConstants.js
 ┃ ┃ ┣ 📂reducers
 ┃ ┃ ┃ ┣ 📜cartReducers.js
 ┃ ┃ ┃ ┣ 📜orderReducers.js
 ┃ ┃ ┃ ┣ 📜productReducers.js
 ┃ ┃ ┃ ┗ 📜userReducers.js
 ┃ ┃ ┣ 📂screens
 ┃ ┃ ┃ ┣ 📜CartScreen.js
 ┃ ┃ ┃ ┣ 📜HomeScreen.js
 ┃ ┃ ┃ ┣ 📜LoginScreen.js
 ┃ ┃ ┃ ┣ 📜OrderListScreen.js
 ┃ ┃ ┃ ┣ 📜OrderScreen.js
 ┃ ┃ ┃ ┣ 📜PaymentScreen.js
 ┃ ┃ ┃ ┣ 📜PlaceOrderScreen.js
 ┃ ┃ ┃ ┣ 📜ProductEditScreen.js
 ┃ ┃ ┃ ┣ 📜ProductListScreen.js
 ┃ ┃ ┃ ┣ 📜ProductScreen.js
 ┃ ┃ ┃ ┣ 📜ProfileScreen.js
 ┃ ┃ ┃ ┣ 📜RegisterScreen.js
 ┃ ┃ ┃ ┣ 📜ShippingScreen.js
 ┃ ┃ ┃ ┣ 📜UserEditScreen.js
 ┃ ┃ ┃ ┗ 📜UserListScreen.js
 ┃ ┃ ┣ 📜App.js
 ┃ ┃ ┣ 📜bootstrap.min.css
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜reportWebVitals.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📜README.md
 ┃ ┣ 📜package-lock.json
 ┃ ┣ 📜package.json
 ┃ ┗ 📜yarn.lock
 ┣ 📂uploads
 ┃ ┣ 📜file.txt
 ┃ ┗ 📜image-1613961963059.png
 ┣ 📜.gitignore
 ┣ 📜Procfile
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
