// HunInfó static landing – GA4 event for the launch button
(function(){
  const btn = document.getElementById('launchBtn');
  if(!btn) return;

  btn.addEventListener('click', function(){
    try{
      if(typeof gtag === 'function'){
        gtag('event','huninfo_launch',{
          event_category:'engagement',
          event_label:'launch_button'
        });
      }
    }catch(e){}
  });
})();

function showToast(){
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
