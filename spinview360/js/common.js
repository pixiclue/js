document.querySelector('.icon_box1').classList.add("active");
window.onload = function() {
    window.CI360.destroy();
    window.CI360.init();
    
    
}




window.onresize = function(event) {
    window.CI360.destroy();
    window.CI360.init();
};
