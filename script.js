function toggleActive(event, element) {
    event.preventDefault(); 

    if (element.closest('.header-options')) {
        var options = document.querySelectorAll('.header-options-select');
        options.forEach(function(option) {
            option.classList.remove('active');
        });
    } else if (element.closest('.main-tabs')) {
        var tabs = document.querySelectorAll('.main-tabs-select');
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });
    }

    element.classList.add('active');
}