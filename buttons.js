const globalErrorButton = document.getElementById('global-error');

globalErrorButton.addEventListener('click', function(){
    throw 'Global error';
})