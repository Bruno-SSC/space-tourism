com0
    I implemented the home page for desktops and started working on the service to check the device in order to control dynamic components.
com1
    Working on the implementation of the mobile home page. Particularly, at the service to detect the resize. However, struggling to understand why the update_device is being called twice each time.
    Apparently, is because I'm creating the debounced function every time the resize event triggers and that's a problem. I don't really know why yet.
